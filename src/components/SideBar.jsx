import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"



const SideBar = () => {
    const { handleToggle} = useContext(AuthContext)

    return (
        <>
            <div className=" w-1/5 left-0 h-screen bottom-0 bg-peach fixed flex flex-col items-center font-lexend p-8">
                <button onClick={handleToggle} className="absolute top-0 right-0">X</button>
                <Link className="w-4/5 rounded-lg flex justify-center hover:bg-wheat text-teal-900" to="/home">Home</Link>
                <Link className="w-4/5 rounded-lg flex justify-center hover:bg-wheat text-teal-900" to="/bestsellers">Bestsellers</Link>
                <Link className="w-4/5 rounded-lg flex justify-center hover:bg-wheat text-teal-900" to="">My Favorites</Link>
            </div>
        </>
    )
}

export default SideBar