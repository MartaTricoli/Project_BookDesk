import { useState, useEffect } from "react";

import { constants } from "../../constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { createNewUserBook } from "../../utilities/books";


const BookSearchEMilio = () => {
    const [bookName, setbookName] = useState("");
    const [bookData, setbookData] = useState(null);
    const [error, setError] = useState(null);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (bookData) {
            console.log("book Data:", bookData);
        }
    }, [bookData]);

    const handleSearchbook = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${bookName}`);
            const result = await response.json();
            console.log(bookData);

            if (response.ok) {
                setbookData(result);
                setError(null);
            }

            if (bookName === "") {
                setError(`inserire nome book`);
                return;
            }

        } catch (error) {
            setError(`non esiste o scritto male`);
            setbookData(null);
        }
    };

    const handleAddBookToAll = async () => {
        try {
            const result = await axios({
                url: `${constants.API_HOST}/${constants.API_USERBOOK}`,
                method: "POST",
                data: {
                    book: bookData,
                    tags: "ALL"
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    const handleAddToBookshelf = async (index) => {
        // const userbook = {
        //     isbn: bookData.docs[index].isbn[0],
        //     tag: "ALL",
        //     headers: token
        // }

        // createNewUserBook(userbook, (error, response) => {
        //     if (error) {
        //         console.log(error);
        //         return;
        //     }

        //     alert("book added to your bookshelf.");
        //     console.log(response);
        // })
        
        try {
            const result = await axios({
                url: `${constants.API_HOST}/${constants.API_USERBOOK}`,
                method: "POST",
                data: {
                    isbn: bookData.docs[index].isbn[0],
                    tag: "ALL"
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <>
            <div className="dark:bg-new_navy_blue">

                <div className="mt-20 ml-56 flex flex-col dark:bg-new_navy_blue">
                    <div className="w-full ">
                        <div
                            className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
                            <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-new_navy_blue dark:text-gray-200 sm:text-4xl">
                                Trova il libro perfetto per te!
                            </p>
                            <form action="/search">
                                <label
                                    className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                                    htmlFor="search-bar">

                                    <input id="search-bar" type="text" value={bookName} onChange={(event) => setbookName(event.target.value)} placeholder="Inserisci una parola chiave, titolo, autore..." name="q"
                                        className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
                                    <button onClick={handleSearchbook}
                                        className="w-full md:w-auto px-6 py-3 bg-new_navy_blue border-new_navy_blue text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                                        <div className="flex items-center transition-all opacity-1">
                                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                                Cerca
                                            </span>
                                        </div>
                                    </button>
                                </label>
                            </form>
                            <svg viewBox="0 0 1024 1024"
                                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                                aria-hidden="true">
                                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.8">
                                </circle>
                                <defs>
                                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                        <stop stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#171F43"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="text-center p-10">
                        <h1 className="font-bold text-4xl mb-4 text-new_dark_blue dark:text-white">Scorri tra una vasta selezione di libri per trovare il tuo prossimo preferito!</h1>
                        <h1 className="text-3xl text-new_navy_blue">-Libri in primo piano ed offerte speciali-</h1>
                    </div>
                    {error && <h1>{error}</h1>}


                    <div className="flex flex-row flex-wrap justify-between ">
                        {bookData?.docs && bookData.docs.length > 0 && bookData.docs.map((docs, index) => (
                            <div className="w-full flex flex-col min-[1400px]:w-1/4 mb-12 justify-center items-center" key={index}>
                                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 shadow-shadowCardShop hover:shadow-shadowCardShop1">
                                    <a href="#">
                                        <div className={`relative h-80 w-72 object-cover rounded-t-xl z-10 overflow-hidden`}>
                                            <img src={`https://covers.openlibrary.org/b/id/${docs.cover_i}-L.jpg`} alt="" />
                                        </div>

                                        <div className="px-4 py-3 w-72">
                                            <span className="text-new_dark_blue mr-3 uppercase text-xs">{docs.author_name}</span>
                                            <p className="text-lg font-bold text-new_navy_blue truncate block capitalize">{docs.title}</p>
                                            <span className="text-new_dark_blue mr-3 uppercase text-xs">first publish: {docs.first_publish_year}</span>
                                            <span className="text-new_dark_blue mr-3 uppercase text-xs">Pages : {docs.number_of_pages_median}</span>
                                            <div className="flex items-center">
                                                <p className="text-lg font-semibold text-new_navy_blue cursor-auto my-3">$$$</p>
                                                <del>
                                                    <p className="text-sm text-new_navy_blue-600 cursor-auto ml-2">$xx,xx</p>
                                                </del>
                                                <div className="ml-auto pr-2">
                                                    <button className="px-2 py-2 bg-gradient-to-r from-new_light_blue to-new_dark_blue text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 902.86 902.86"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                              M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                                                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                             c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                             c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                             C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                             c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                             M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                             S619.162,694.432,619.162,716.897z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                    <button onClick={handleAddBookToAll} className="ml-4 px-2 py-2 bg-gradient-to-r from-new_light_blue to-new_dark_blue text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" id="heart"><path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-4">
                                                <div className="flex">
                                                    <span className="text-new_dark_blue font-medium pr-8">3.7 out of 5 stars</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-new_dark_blue w-5 h-auto fill-current hover:text-red-600"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-new_dark_blue w-5 h-auto fill-current hover:text-new_dark_blue"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-new_dark_blue w-5 h-auto fill-current hover:text-new_dark_blue"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-new_dark_blue w-5 h-auto fill-current hover:text-green-600"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-new_dark_blue w-5 h-auto fill-current hover:text-green-600"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <button className="border-2 hover:border-new_yellow w-64 mt-4" onClick={() => handleAddToBookshelf(index)}>Add to your bookshelf</button>
                            </div>
                        ))
                        }

                    </div>
                </div>

            </div>



        </>
    );
};

export default BookSearchEMilio;
