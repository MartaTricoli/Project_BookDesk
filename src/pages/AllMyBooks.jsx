import BookCardLibrary from "../components/__componet/BookCardLibrary";

const AllMyBooks = () => {
    return(
        <div className="flex flex-col items-center mt-20 dark:bg-new_navy_blue">
            <h3 className="text-5xl font-bold text-new_navy_blue dark:text-white w-[1480px] text-center ml-40 mb-8">Tutti i tuoi libri</h3>
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

export default AllMyBooks;