import NavBar from "../components/NavBar"
import useFetch from "../hooks/useFetch"
import BookCard from "../components/BookCard"
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import coverimage from "../assets/coverimage.png"
import "../App.css"

const SearchPage = () => {
    const { session, search, handleSearch, handleInput, searchResults } = useContext(AuthContext)
    const [favorites, setFavorites] = useState([]);
    const [toread, setToread] = useState([]);
    const handleFavorites = (book) => {
        const isFavorite = favorites.some(favBook => favBook === book);
        if (!isFavorite) {
            // Add to favorites
            const updatedFavorites = [...favorites, book];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else if (isFavorite) {
            // Remove from favorites
            const updatedFavorites = favorites.filter(favBook => favBook !== book);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    }
    const handleToRead = (book) => {
        const isToRead = toread.some(favBook => favBook === book);
        if (!isToRead) {
            // Add to favorites
            const updatedToRead = [...toread, book];
            setToread(updatedToRead);
            localStorage.setItem('To-Read', JSON.stringify(updatedToRead));
        } else if (isToRead) {
            // Remove from favorites
            const updatedToRead = toread.filter(favBook => favBook !== book);
            setFavorites(updatedToRead);
            localStorage.setItem('To-Read', JSON.stringify(updatedToRead));
        }
    }

    const isFavorite = (book) => {
        return favorites.includes(book);
    }
    const isToRead = (book) => {
        return toread.includes(book);
    }
    return (
        <>
            {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <div className="h-10 px-2 rounded-lg gap-x-3 flex justify-center items-center border-black border-1 bg-wheat w-full">
                        <CiSearch />
                        <form action="" className="flex w-2/3" onSubmit={handleSearch}>
                            <input className="w-2/3 font-inter focus:outline-none bg-transparent" type="text" placeholder="Search" value={search} onChange={handleInput} />
                            <button type="submit" className="w-[100px] h-10 bg-teal-900 font-lexend hover:text-slate-100 hover:bg-teal-700 text-white rounded-lg">Search</button>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                        {
                            searchResults && searchResults.items && searchResults.items.map((book) => {
                                return (
                                    <div className="flex flex-col">
                                        <Link to={`/book/${book.id}`} state={book}>
                                            <BookCard image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : coverimage} author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Not found"} title={book.volumeInfo.title} />
                                        </Link>
                                        <div className="flex justify-around">
                                            <button onClick={() => handleFavorites(book)} className="text-red-500">{isFavorite(book) ? <FaHeart /> : <IoIosHeartEmpty />}</button>
                                            <button onClick={() => handleToRead(book)} className="text-teal-900">{isToRead(book) ? <IoBookmark /> : <IoBookmarkOutline />}</button>
                                        </div>
                                    </div>

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

export default SearchPage