import data from "../utils/data.json"
import NavBar from "../components/NavBar"
import useFetch from "../hooks/useFetch"
import BookCard from "../components/BookCard"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import coverimage from "../assets/coverimage.png"
import "../App.css"

const Home = () => {
    const { session, searchResults } = useContext(AuthContext)
    const discoverbooks = useFetch("https://www.googleapis.com/books/v1/mylibrary/bookshelves/8/volumes")
    console.log(discoverbooks)

    return (
        <>
            {/* <NavBar />

            <div className="flex flex-col bg-wheat">
                <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">POPULAR</h3>
                <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                    {
                        data.items.map((book) => {
                            return (
                                <Link to={`/book/${book.id}`} state={book}><BookCard image={book.volumeInfo.imageLinks.thumbnail} author={book.volumeInfo.authors[0]} title={book.volumeInfo.title}/></Link>
                            )
                        })
                    }
                </div>
            </div> */}
            {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">POPULAR</h3>
                    <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                        {
                            searchResults && searchResults.items && searchResults.items.map((book) => {
                                return (
                                    <Link to={`/book/${book.id}`} state={book}><BookCard image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : coverimage} author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Not found"} title={book.volumeInfo.title} /></Link>
                                )
                            })
                        }
                    </div>
                </div>
            </> : <>
                <div className="w-screen h-screen bg-peach flex justify-center items-center">
                    <h1 className="font-lexend text-xl">Ooops....You aren't logged in</h1>
                    <Link to="/"><button className="flex justify-center items-center px-8 py-4 bg-teal-900 text-white font-semibold hover:bg-teal-700 rounded-full gap-x-5 my-10">Go Log In</button></Link>
                </div>
            </>}
        </>
    )
}

export default Home