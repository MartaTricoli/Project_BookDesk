import BookCardLibrary from "../components/__componet/BookCardLibrary";

const BooksNotRead = () => {
    return(
        <div className="flex flex-col items-center mt-32">
            <h3 className="text-5xl font-bold text-new_navy_blue w-[1480px] text-center ml-40 mb-8">Libri per letture future</h3>
            <div className="flex flex-wrap justify-start w-[1480px] ml-auto mb-4">
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
                <BookCardLibrary />
            </div>
        </div>
    )
}

export default BooksNotRead;