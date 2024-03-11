import Tabs from "../components/__componet/Tabs"
import ActualBook from "../components/shared/ActualBook"

const MySelf = () => {


    return (
        <>
        <div className="dark:bg-new_navy_blue">
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
                        <h1 className="text-4xl font-medium text-gray-700 dark:text-white">Marta Tricoli <span className="font-light text-gray-500 dark:text-white">27</span></h1>
                        <p className="font-light text-gray-600 dark:text-white mt-3">Veneto</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center ">
                        <Tabs />
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center p-8">
                <ActualBook />
            </div>


</div>
        </>
    )
}

export default MySelf