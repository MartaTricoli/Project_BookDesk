import { useState } from "react";
import { Link } from "react-router-dom";

export const QuoteCard = ({id}) => {
    const [likes, setLikes] = useState(42);

    const handleLikes = event => {
        if (event.currentTarget.classList.contains("bg-new_dark_blue")) {
            setLikes(likes => likes - 1);
            event.currentTarget.classList.remove("bg-new_dark_blue");
            event.currentTarget.classList.remove("text-white");
        } else {
            setLikes(likes => likes + 1);
            event.currentTarget.classList.add("bg-new_dark_blue");
            event.currentTarget.classList.add("text-white");
        }
    }

    const showHideComments = event => {
        const element = document.getElementById(id);

        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
            event.currentTarget.classList.add("bg-new_dark_blue");
            event.currentTarget.classList.add("text-white");
        } else {
            element.classList.add("hidden");
            event.currentTarget.classList.remove("bg-new_dark_blue");
            event.currentTarget.classList.remove("text-white");
        }
    }

    return(
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-new_dark_blue max-w-md m-4">
                {/* //user info with three dot menu */}
                <p className="text-gray-500 text-sm pb-4">Posted 2 hours ago</p>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4 justify-center">
                        <Link>
                            <img src="https://placekitten.com/40/40" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        </Link>
                        <div className="flex">
                            <Link>
                                <p className="text-gray-800 font-semibold">John Doe
                                </p>
                            </Link>
                            <span className="font-normal pl-2">ha aggiunto una citazione:</span>
                        </div>
                    </div>
                    <q className="pb-6">Proprio in quel tempo Drogo di accorse come gli uomini, per quanto possano volersi bene, rimangano sempre lontani; che se uno soffre, il dolore è completamente suo, nessun altro può prenderne su di sé una minima parte; che se uno soffre, gli altri per questo non sentono male, anche se l'amore è grande, e questo provoca la solitudine della vita.</q>
                </div>
                {/* //image */}
                <div className="mb-4 flex justify-center">
                    <Link>
			            <img src="https://www.mondadoristore.it/img/Il-deserto-dei-tartari-Dino-Buzzati/ea978880449295/BL/BL/01/NZO/?tit=Il+deserto+dei+tartari&aut=Dino+Buzzati" alt="Post Image" className="h-48 object-cover rounded-md" />
                    </Link>
                    <div className="text-new_navy_blue pl-4 pt-2">
                        <Link>
                            <h3 className="font-bold">Il deserto dei tartari,</h3>
                        </Link>
                        <Link>
                            <h2 className="font-medium">Dino Buzzati</h2>
                        </Link>
                        <div className="flex items-center justify-center gap-4">
                        <img src="https://community.fabric.microsoft.com/oxcrx34285/attachments/oxcrx34285/QuickMeasuresGallery/207/1/5-star-rating.png" alt="" className="w-32"/>
                            <span>(157)</span>
                        </div>
                    </div>
                </div>
                {/* //like and comment Section */}
                <div className="flex items-center justify-between text-gray-500">
			        <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-new_dark_blue hover:text-white rounded-full p-1 group" onClick={handleLikes}>
                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>{likes} Likes</span>
                        </button>
			        </div>
			        <button onClick={showHideComments} className="flex justify-center items-center gap-2 px-2 hover:bg-new_dark_blue hover:text-white rounded-full p-1 group">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                            </g>
                        </svg>
				        <span>3 Comment</span>
			        </button>
		        </div>
                {/* DROPDOWN COMMENTI */}
                <div className="hidden" id={id}>
                    <hr className="mt-2 mb-2" />
                    <p className="text-gray-800 font-semibold">Comment</p>
                    <hr className="mt-2 mb-2" />
                    <div className="mt-4">
                        {/* //Comment 1 */}
                        <div className="flex items-center space-x-2">
                            <img src="https://placekitten.com/32/32" alt="User Avatar" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-gray-800 font-semibold">Jane Smith</p>
                                <p className="text-gray-500 text-sm">Masterpiece.</p>
                            </div>
                        </div>
                        {/* //Comment 2 */}
                        <div className="flex items-center space-x-2 mt-2">
                            <img src="https://placekitten.com/32/32" alt="User Avatar" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-gray-800 font-semibold">Bob Johnson</p>
                                <p className="text-gray-500 text-sm">A book everyone should read...</p>
                            </div>
                        </div>
                        {/* //Reply from John Doe with indentation */}
                        <div className="flex items-center space-x-2 mt-2 ml-6">
                            <img src="https://placekitten.com/40/40" alt="User Avatar" className="w-6 h-6 rounded-full" />
                            <div>
                                <p className="text-gray-800 font-semibold">John Doe</p>
                                <p className="text-gray-500 text-sm">words of wisdom</p>
                            </div>
                        </div> 
                        {/* //Add more comments and replies as needed  */}
                    </div>
                </div>
            </div>
        </>
    )
}
