import data from "../utils/data.json"
import NavBar from "../components/NavBar"
import "../App.css"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Home = () => {

    const { session } = useContext(AuthContext)
    console.log(session)
    return (
        <>
            <NavBar />

            <div className="flex flex-col bg-wheat">
                <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">POPULAR</h3>
                <div className="flex flex-wrap gap-4 md:px-16 mx-auto">
                    {
                        data.items.map((book) => {
                            return (
                                <button className=" text-left focus:bg-teal-900/20 focus:border focus:border-teal-900 font-inter w-60 flex flex-col border-black rounded-lg p-6 justify-center items-start gap-5">
                                    <div className="">
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book thumbnail" />
                                    </div>
                                    <div>
                                        <p className="font-lexend text-teal-900 font-semibold text-pretty">{book.volumeInfo.title}</p>
                                        <p>{book.volumeInfo.authors[0]}</p>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            {/* {session ? <>
                <NavBar />

                <div className="flex flex-col bg-wheat">
                    <h3 className="font-lexend text-4xl text-teal-900 my-10 ml-10">POPULAR</h3>
                    <div className="flex flex-wrap gap-4 md:px-16 justify-center mx-auto">
                        {
                            data.items.map((book) => {
                                return (
                                    <button className=" text-left focus:bg-teal-900/20 focus:border focus:border-teal-900 font-inter w-60 flex flex-col border-black rounded-lg p-6 justify-center items-start gap-5">
                                        <div className="">
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book thumbnail" />
                                        </div>
                                        <div>
                                            <p className="font-lexend text-teal-900 font-semibold text-pretty">{book.volumeInfo.title}</p>
                                            <p>{book.volumeInfo.authors[0]}</p>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </> : window.location.href = "/"} */}
        </>
    )
}

export default Home