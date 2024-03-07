import data1 from "../utils/bestsellers1.json"
import data2 from "../utils/bestsellers2.json"
import NavBar from "../components/NavBar"
import BookCard from "../components/BookCard"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"

const BestSellers = () => {
    const { bestSellers, session } = useContext(AuthContext)
    console.log(bestSellers)

    return (
        <>
            {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">POPULAR</h3>
                    <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                        {/* {
                            searchResults && searchResults.items && searchResults.items.map((book) => {
                                return (
                                    <Link to={`/book/${book.id}`} state={book}><BookCard image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : coverimage} author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Not found"} title={book.volumeInfo.title} /></Link>
                                )
                            })
                        } */}
                    </div>
                </div>
            </> : <>
                <div className="w-screen h-screen bg-peach flex justify-center items-center flex-col">
                    <h1 className="font-lexend text-xl">Ooops....You aren't logged in</h1>
                    <Link to="/"><button className="flex justify-center items-center px-8 py-4 bg-teal-900 text-white font-semibold hover:bg-teal-700 rounded-full gap-x-5 my-10 font-lexend">Go Log In</button></Link>
                </div>
            </>}
        </>
    )
}

export default BestSellers