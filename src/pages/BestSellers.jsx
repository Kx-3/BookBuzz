import NavBar from "../components/NavBar"
import BookCard from "../components/BookCard"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const BestSellers = () => {
    const { session, bestsellers } = useContext(AuthContext)
    
    if (bestsellers == null) {
        return (
            <>Loading...</>
        )
    }


    return (
        <>
            {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">BESTSELLERS</h3>
                    <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                        {
                            bestsellers && bestsellers.results && bestsellers.results.lists.map((list) => {
                                return (
                                    <div className="flex flex-col">
                                        <h3 className="font-lexend text-2xl text-teal-900 my-5 ml-10">{list.display_name}</h3>
                                        <div className="flex flex-wrap">
                                            {
                                                list.books.map((book) => {
                                                    return (
                                                        <Link to={`/bestseller/${book.primary_isbn10}`} state={book}><BookCard image={book.book_image} author={book.author} title={book.title} /></Link>
                                                    )
                                                })
                                            }
                                        </div>
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