import NavBar from "../components/NavBar"
import BookCard from "../components/BookCard"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const BestSellers = () => {
    const { session } = useContext(AuthContext)
    const TIMES_KEY = 'MENH0JaFr7qfGXhh4KumJ4voGuddZQeo'
    const timesUrl = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${TIMES_KEY}`
    const data = useFetch(timesUrl)
    if(data == null){
        return(
            <>Loading...</>
        )
    }

    console.log(data)

    return (
        <>
            {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">BESTSELLERS</h3>
                    <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                        {
                            data && data.results && data.results.lists.map((list) => {
                                return (
                                    <div className="flex flex-col">
                                        <h3 className="font-lexend text-2xl text-teal-900 my-5 ml-10">{list.display_name}</h3>
                                        {
                                            list.books.map((book) => {
                                                return (
                                                    <Link to={`/book/${book.primary_isbn10}`} state={book}><BookCard image={book.book_image} author={book.author} title={book.title} /></Link>
                                                )
                                            })
                                        }
                                    </div> 
                                )
                            })
                        }
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