import logo from "../assets/logo.png"
import { FaGoogle } from "react-icons/fa";
import { supabase } from "../utils/supabaseConfig";

const Login = () => {

    async function handleSignInWithGoogle(e) {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })
        if(error) {
            console.log(error)
        } else {
            console.log(data)
        }
    }

    return (
        <div className="h-screen w-screen bg-peach px-8 py-14 flex flex-col items-center text-center font-lexend text-2xl">
            <div className="max-w-96 mt-10">
                <img className="w-full h-full object-contain" src={logo} alt="Book buzz logo" />
            </div>
            <p className="max-w-3xl md:text-3xl lg:text-4xl tracking-tight my-20">Your <span className="text-teal-900 font-semibold italic text-3xl tracking-wider">No.1</span> Book Buddy: Explore, Manage, and Liberate Your Reading Adventures with Ease!</p>
            <button onClick={handleSignInWithGoogle} className="flex justify-center items-center px-8 py-4 bg-teal-900 text-white font-semibold hover:bg-teal-700 rounded-full gap-x-5 my-10">Sign In with Google <FaGoogle /></button>
        </div>
    )
}

export default Login