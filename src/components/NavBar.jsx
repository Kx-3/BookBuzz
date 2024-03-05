import logo from "../assets/logo.png"
import user from "../assets/user.jpg"
import { CiSearch } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { supabase } from "../utils/supabaseConfig";

const NavBar = () => {
    const { session } = useContext(AuthContext)
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            alert(error)
        }
        window.location.href = '/'
    }

    return (
        <nav className="w-auto bg-peach flex items-center justify-between py-4 md:py-8 md:pr-24 px-6">
            <div className="flex items-center gap-x-4 md:gap-x-32">
                <div className="w-32 h-12 md:w-52 md:h-20">
                    <img className="w-full h-full object-cover" src={logo} alt="Logo" />
                </div>
                <div className="h-10 px-2 rounded-lg gap-x-3 flex items-center border-black border-1 bg-wheat w-64 md:w-auto lg:w-96">
                    <CiSearch />
                    <input className="font-inter focus:outline-none bg-transparent" type="text" placeholder="Search" />
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="w-auto p-2 box-border inline-flex bg-wheat font-inter rounded-xl items-center gap-x-3">
                    <div className="w-7 h-7 md:w-10 md:h-10">
                        <img className="w-full h-full object-cover rounded-lg" src={user} alt="User Img" />
                    </div>
                    <h2 className="hidden md:block">John Doe</h2>
                </div>
                <button onClick={signOut} className="bg-wheat rounded-full md:scale-150 w-10 h-10 flex items-center justify-center"><IoIosLogOut /></button>
            </div>
        </nav>
    )
}
export default NavBar