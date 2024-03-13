import logo from "../assets/logo.png"
import user from "../assets/user.jpg"
import { IoIosLogOut } from "react-icons/io";
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { GiHamburgerMenu } from "react-icons/gi";
import { supabase } from "../utils/supabaseConfig";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const NavBar = () => {
    const { session, toggle, handleToggle } = useContext(AuthContext)
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
                <button className="h-full w-1/2" onClick={handleToggle}><GiHamburgerMenu /></button>
                <div className="w-32 h-12 md:w-52 md:h-20">
                    <Link to="/home"><img className="w-full h-full object-contain" src={logo} alt="Logo" /></Link>
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                {session && session.user && <div className="w-auto p-2 box-border inline-flex bg-wheat font-inter rounded-xl items-center gap-x-3">
                    <div className="w-7 h-7 md:w-10 md:h-10">
                        <img className="w-full h-full object-cover rounded-lg" src={session.user.user_metadata.avatar_url} alt="User Img" />
                    </div>
                    <h2 className="hidden md:block">{session.user.user_metadata.full_name}</h2>
                </div>}
                <button onClick={signOut} className="bg-wheat rounded-full md:scale-150 w-10 h-10 flex items-center justify-center"><IoIosLogOut /></button>
            </div>
            {toggle && <SideBar />}
        </nav>
    )
}
export default NavBar