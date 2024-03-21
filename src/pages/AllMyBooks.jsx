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
    const showAllBooks = [];

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
            console.log("primo step", allBook);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const refetchAllBooks = () => {
        allBook.map(async book => {
            try {
                const result = await axios({
                    url: `${constants.API_HOST}/${constants.API_USERBOOK}/${book.book}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setBooks(result.data);
                showAllBooks.push(books);
                console.log("contenuto di books nei vari refetch", books);
            } catch (error) {
                console.log(error);
            }
        })
        
    }
    useEffect(() => {
        fetchAllBooks();
    }, []);

    return(
        <div className="flex flex-col items-center mt-20 dark:bg-new_navy_blue h-screen">
            <h3 className="text-5xl font-bold text-new_navy_blue dark:text-white w-[1480px] text-center ml-40 mb-8">Your books</h3>
            <button className="border-2 border-black" onClick={refetchAllBooks}>ALL</button>
            <div className="flex flex-wrap justify-start w-[1480px] ml-auto mb-4">
                {error && <p className="pl-52">There was an error, books not available.</p>}
                {loading && allBook.length === 0 && <p className="pl-52">Loading...</p>}
                {!loading && !error && allBook.length === 0 && <p className="pl-52">You have not add any book yet.</p>}
                {books && console.log("contenuto di books", books)}
                {showAllBooks && (
                    <>
                    <div className="ml-80 bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-new_pastel_blue shadow-new_pastel_blue max-w-md m-4">
                <div className="mb-4 flex justify-center">
			        <img src={books.cover} alt="Post Image" className="h-48 object-cover rounded-md cursor-pointer" />
                    <div className="text-new_navy_blue pl-4 pt-2">
                            <h3 className="font-bold">{books.name}</h3>
                            <h2 className="font-medium">{books.author}</h2>
                    </div>
                </div>
            </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AllMyBooks;