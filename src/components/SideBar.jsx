import { Link } from "react-router-dom"



const SideBar = () => {
    return (
        <>
            <div className=" w-1/5 left-0 bg-peach fixed flex flex-col items-center font-lexend">
                <Link className="w-4/5 flesx justify-center hover:bg-wheat text-teal-900" to="/home">Home</Link>
                <Link className="w-4/5 flesx justify-center hover:bg-wheat text-teal-900" to="/bestsellers">Bestsellers</Link>
                <Link className="w-4/5 flesx justify-center hover:bg-wheat text-teal-900" to="">My Favorites</Link>
            </div>
        </>
    )
}

export default SideBar