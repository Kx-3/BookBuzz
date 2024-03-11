import NavBar from "../components/NavBar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import coverimage from "../assets/coverimage.png"

const Book = () => {
    const book = useLocation().state
    const [isReadMore, setIsReadMore] = useState(true)
    const [favorites, setFavorites] = useState([])
    const [toRead, setToRead] = useState([])
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
        const isToRead = toRead.some(toReadBook => toReadBook === book);
        if (!isToRead) {
            // Add to favorites
            const updatedToRead = [...toRead, book];
            setFavorites(updatedToRead);
            localStorage.setItem('ToRead', JSON.stringify(updatedToRead));
        } else if (isToRead) {
            // Remove from favorites
            const updatedToRead = toRead.filter(toReadBook => toReadBook !== book);
            setFavorites(updatedToRead);
            localStorage.setItem('ToRead', JSON.stringify(updatedToRead));
        }
    }
    const handleToggle = () => {
        setIsReadMore(!isReadMore)
    }
    return (
        <>
            <NavBar />
            <div className="md:flex md:gap-x-20 lg:gap-x-48 px-10 md:px-16 lg:px-24 py-8">
                <div className="w-64 h-64">
                    <img className="w-full h-full object-contain" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : coverimage} alt="Book Cover" />
                </div>
                <div className="font-lexend max-w-3xl p-5 flex flex-col gap-5">
                    <h1 className="text-2xl text-teal-900">{book.volumeInfo.title}</h1>
                    <h3 className="text-xl">{book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Not found"}</h3>
                    <p>Pages: {book.volumeInfo.pageCount}</p>
                    <p className="font-inter text-sm">{isReadMore ? book.volumeInfo.description.slice(0, 250) : book.volumeInfo.description}<span onClick={handleToggle} className="cursor-pointer font-lexend text-teal-900 m-2">{isReadMore ? "...read more" : "show less"}</span></p>
                </div>
                <div className="flex flex-col font-lexend">
                    <button className="w-32 h-10 bg-teal-900 hover:bg-teal-700 text-white rounded-lg" onClick={handleFavorites(book)}>{favorites.includes(book) ? "Add to favorites" : "Remove from favorites"}</button>
                    <button className="w-32 h-10 bg-teal-900 hover:bg-teal-700 text-white rounded-lg" onClick={handleToRead(book)}>{toRead.includes(book) ? "Add to to-read" : "Remove from to-read"}</button>
                </div>
            </div>
        </>


    )
}

export default Book