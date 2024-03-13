import NavBar from "../components/NavBar"
import useFetch from "../hooks/useFetch"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import coverimage from "../assets/coverimage.png"

const Book = () => {
    const G_KEY = import.meta.env.VITE_G_KEY
    const book = useLocation().state
    const details = useFetch(`https://www.googleapis.com/books/v1/volumes/${book.id}?key=${G_KEY}`)
    const [isReadMore, setIsReadMore] = useState(true)
    const handleToggle = () => {
        setIsReadMore(!isReadMore)
    }

    if(details == null){
        return(
            <div>Loading...</div>
        )
    }
    console.log(details)
    return (
        <>
            <NavBar />
            <div className="md:flex md:gap-x-20 lg:gap-x-48 px-10 md:px-16 lg:px-24 py-8">
                <div className="w-64 h-64">
                    <img className="w-full h-full object-contain" src={details.volumeInfo.imageLinks ? details.volumeInfo.imageLinks.thumbnail: coverimage} alt="Book Cover" />
                </div>
                <div className="font-lexend max-w-3xl p-5 flex flex-col gap-5">
                    <h1 className="text-2xl text-teal-900">{book.volumeInfo.title}</h1>
                    <h3 className="text-xl">{book.volumeInfo.authors ? book.volumeInfo.authors[0]: "Not found"}</h3>
                    <p>Pages: {book.volumeInfo.pageCount}</p>
                    <p>Main Category: {details.volumeInfo.mainCategory}</p>
                    <p>Rating: {details.volumeInfo.averageRating}</p>
                    <p className="font-inter text-sm">{isReadMore ? book.volumeInfo.description.slice(0, 250) : book.volumeInfo.description}<span onClick={handleToggle} className="cursor-pointer font-lexend text-teal-900 m-2">{isReadMore ? "...read more" : "show less"}</span></p>
                </div>
            </div>
        </>


    )
}

export default Book