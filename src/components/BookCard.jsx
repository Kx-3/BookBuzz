const BookCard = ({ image, title, author, fn }) => {
    return (
        <button className=" text-left hover:bg-teal-900/20 hover:border hover:border-teal-900 font-inter w-60 flex flex-col border-black rounded-lg p-6 justify-center items-start gap-5">
            <div className="">
                <img src={image} alt="Book thumbnail" />
            </div>
            <div>
                <p className="font-lexend text-teal-900 font-semibold text-pretty">{title}</p>
                <p>{author}</p>
            </div>
        </button>
    )
}

export default BookCard