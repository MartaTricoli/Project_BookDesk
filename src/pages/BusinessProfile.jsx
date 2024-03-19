import Tabs from "../components/__componet/Tabs"
import ActualBook from "../components/shared/ActualBook"
import { useSelector } from "react-redux"
import { getAgeFromDate } from "../utilities/dates"

const BusinessProfile = () => {
    const publisher = useSelector((state) => state.auth.publisher);

    return (
        <>
            <div className="dark:bg-new_navy_blue h-screen">
                <div className="p-24">
                    <div className="p-8 bg-white shadow mt-24 max-sm:-mt-8 dark:bg-new_navy_blue">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="flex flex-col md:flex-row text-center order-last md:order-first mt-20 md:mt-0">
                                <div className="flex-grow mb-4 md:mb-0">
                                    <p className="font-bold text-gray-700 dark:text-white text-xl">0</p>
                                    <p className="text-gray-400 dark:text-new_yellow">Friends</p>
                                </div>
                            </div>



                            <div className="relative">
                                <div className="w-48 h-48 max-sm:w-20 max-sm:h-20 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 max-sm:-mt-2  flex items-center justify-center text-indigo-500">
                                  { publisher.profile_img ? <img className="w-full rounded-full"  src={publisher.profile_img} alt="profile img" /> : <svg className="w-1/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>}  
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-32 md:mt-0">
                                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 dark:bg-new_pastel_blue hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Connect
                                </button>
                                <button className="text-white py-2 px-4 uppercase rounded bg-new_dark_blue hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    Message
                                </button>
                            </div>
                        </div>
                        <div className="mt-20 text-center  pb-12">
                            <h1 className="text-4xl font-medium text-gray-700 dark:text-white">{publisher.business_info.name}</h1>
                            <p className="text-lg font-small text-gray-700 dark:text-white">{publisher.business_info.address}, {publisher.business_info.city}, {publisher.business_info.cap}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessProfile;