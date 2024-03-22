import React, { useState, useEffect } from "react";
import Tabs from "../components/__componet/Tabs";
import ActualBook from "../components/shared/ActualBook";
import { useSelector } from "react-redux";
import { getAgeFromDate } from "../utilities/dates";
import { Link } from "react-router-dom";

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const savedText = localStorage.getItem("profileInputText");
        if (savedText) {
            setInputText(savedText);
        }
    }, []);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    useEffect(() => {
        localStorage.setItem("profileInputText", inputText);
    }, [inputText]);

    return (
        <>
            <div className="dark:bg-new_navy_blue ml-[142px]">
                <div className="p-24">
                    <div className="p-8 bg-white shadow mt-24 max-sm:-mt-8 dark:bg-new_navy_blue">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <textarea
                                id="message"
                                rows="4"
                                value={inputText}
                                onChange={handleInputChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                                placeholder="Write your thoughts here..."
                            ></textarea>
                            <div className="relative">
                                <div className="w-48 h-48 max-sm:w-20 max-sm:h-20 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 max-sm:-mt-2  flex items-center justify-center text-indigo-500">
                                    {user.profile_img ? <img className="w-full rounded-full" src={user.profile_img} alt="profile img" /> : <svg className="w-1/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-32 md:mt-0">
                                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 dark:bg-new_pastel_blue hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    <Link to="/allmybooks">
                                        My Books
                                    </Link>
                                </button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-new_dark_blue hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    <Link to="/shop">
                                        Search
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="mt-20 text-center  pb-12">
                            <h1 className="text-4xl font-medium text-gray-700 dark:text-white">{user.first_name} {user.last_name} <span className="font-light text-gray-500 dark:text-white">{getAgeFromDate(user.birth_date)}</span></h1>
                            <p className="font-light text-gray-600 dark:text-white mt-3">{user.region}</p>
                        </div>
                        <div className="mt-12 flex flex-col justify-center ">
                            <Tabs />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
