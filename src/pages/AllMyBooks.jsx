import { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "../constants";
import { useSelector } from "react-redux";

const AllMyBooks = () => {
    const [allBook, setAllBook] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const [selectedBookStatuses, setSelectedBookStatuses] = useState({});
    const [selectedBookPages, setSelectedBookPages] = useState({});
    const [modifiedBookPages, setModifiedBookPages] = useState({});

    const fetchAllBooks = async () => {
        setError(false);
        setLoading(true);
        try {
            const result = await axios({
                url: `${constants.API_HOST}/${constants.API_USERBOOK}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setAllBook(result.data.docs);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const refetchAllBooks = () => {
        allBook.forEach(async book => {
            if (book.user === user._id) {
                try {
                    const result = await axios({
                        url: `${constants.API_HOST}/${constants.API_USERBOOK}/${book.book}`,
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    setBooks(prevBooks => [...prevBooks, result.data]);
                    setSelectedBookStatuses(prevState => ({
                        ...prevState,
                        [book._id]: result.data.status || ""
                    }));
                    setSelectedBookPages(prevPages => ({
                        ...prevPages,
                        [book._id]: result.data.info.pages || 0
                    }));
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }

    useEffect(() => {
        fetchAllBooks();
    }, []);

    useEffect(() => {
        const storedBookStatuses = JSON.parse(localStorage.getItem("selectedBookStatuses"));
        if (storedBookStatuses) {
            setSelectedBookStatuses(storedBookStatuses);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedBookStatuses", JSON.stringify(selectedBookStatuses));
    }, [selectedBookStatuses]);



    const handleBookStatusChange = (bookId, status) => {
        setSelectedBookStatuses(prevState => ({
            ...prevState,
            [bookId]: status
        }));
    };

    const handleBookPagesChange = (bookId, pages) => {
        setSelectedBookPages(prevPages => ({
            ...prevPages,
            [bookId]: pages
        }));

        setModifiedBookPages(prevPages => ({
            ...prevPages,
            [bookId]: pages
        }));
    };

    return (
        <div className="flex flex-col items-center mt-20 dark:bg-new_navy_blue h-full">
            <h3 className="text-5xl font-bold text-new_navy_blue dark:text-white w-[1480px] text-center ml-40 mb-8 mt-4">Your books</h3>
            <div className="flex gap-12 mb-8">
                <button className="border-2 border-black px-4 py-2" onClick={refetchAllBooks}>ALL</button>
                <button className="border-2 border-black px-4 py-2">READ</button>
                <button className="border-2 border-black px-4 py-2">READING</button>
                <button className="border-2 border-black px-4 py-2">TO READ</button>
                <button className="border-2 border-black px-4 py-2">FAVOURITES</button>
                <button className="border-2 border-black px-4 py-2">WHISHLIST</button>
            </div>
            <div className="flex flex-wrap justify-start w-[1480px] ml-52 mb-96">
                {error && <p className="pl-52">There was an error, books not available.</p>}
                {loading && allBook.length === 0 &&
                    <div>
                        <p className="pl-52">Loading...</p>
                        <p className="h-screen"></p>
                    </div>
                }
                {!loading && !error && allBook.length === 0 && <p className="pl-52">You have not added any book yet.</p>}
                {!loading && !error && books.length === 0 && <p className="h-screen"></p>}
                {books.length > 0 && books.map(book => (
                    <div key={book._id}>
                        {console.log(books)}
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-new_pastel_blue shadow-new_pastel_blue max-w-md m-4">
                            <div className="mb-4 flex justify-center">
                                <img src={book.cover} alt="Post Image" className="h-48 object-cover rounded-md cursor-pointer" />
                                <div className="text-new_navy_blue pl-4 pt-2">
                                    <h3 className="font-bold">{book.name}</h3>
                                    <h2 className="font-medium">{book.author}</h2>
                                    <h2 className="font-medium">Total Pages: {book.info.pages}</h2>
                                    <input
                                        type="number"
                                        value={modifiedBookPages[book._id] || ""}
                                        onChange={(e) => {
                                            const newValue = parseInt(e.target.value);
                                            if (!isNaN(newValue) && newValue >= 0 && newValue <= book.info.pages) {
                                                handleBookPagesChange(book._id, newValue);
                                            }
                                        }}
                                        className="border border-gray-300 rounded-md px-2 py-1 mt-2"
                                        placeholder="Page"
                                        min="0"
                                        max={book.info.pages}
                                    />
                                    <select
                                        value={selectedBookStatuses[book._id] || ""}
                                        onChange={(e) => handleBookStatusChange(book._id, e.target.value)}
                                        className="border border-gray-300 rounded-md px-2 py-1 mt-2"
                                    >
                                        <option value="" disabled>Select status</option>
                                        <option value="read">Read</option>
                                        <option value="reading">Reading</option>
                                        <option value="to read">To Read</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMyBooks;
