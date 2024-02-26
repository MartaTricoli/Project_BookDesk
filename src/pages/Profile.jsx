import ActualBook from "../components/shared/ActualBook"
import Tabs from "./Library"

const MySelf = () => {


    return (
        <>
            <div class="p-16">
                <div class="p-8 bg-white shadow mt-24 max-sm:-mt-8">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="flex flex-col md:flex-row text-center order-last md:order-first mt-20 md:mt-0">
                            <div class="flex-grow mb-4 md:mb-0">
                                <p class="font-bold text-gray-700 text-xl">22</p>
                                <p class="text-gray-400">Friends</p>
                            </div>
                            <div class="flex-grow mb-4 md:mb-0">
                                <p class="font-bold text-gray-700 text-xl">10</p>
                                <p class="text-gray-400">Photos</p>
                            </div>
                            <div class="flex-grow">
                                <p class="font-bold text-gray-700 text-xl">89</p>
                                <p class="text-gray-400">Comments</p>
                            </div>
                        </div>



                        <div class="relative">
                            <div class="w-48 h-48 max-sm:w-20 max-sm:h-20 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 max-sm:-mt-2  flex items-center justify-center text-indigo-500">
                            </div>

                        </div>
                        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-32 md:mt-0">
                            <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Connect
                            </button>
                            <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Message
                            </button>
                        </div>
                    </div>
                    <div class="mt-20 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium text-gray-700">Jessica Jones, <span class="font-light text-gray-500">27</span></h1>
                        <p class="font-light text-gray-600 mt-3">inservientopoli</p>
                        <p class="mt-8 text-gray-500">lettrice incallita - mi piaccinono i pony</p>
                        <p class="mt-2 text-gray-500">Universita' della strada</p>
                    </div>
                    <div class="mt-12 flex flex-col justify-center">
                        <p class="text-gray-600 text-center font-light lg:px-16">
                            È LA BACCHETTA A SCEGLIERE IL MAGO, SIGNOR POTTER. NON È SEMPRE CHIARO IL PERCHÉ, MA CREDO CHE SIA CHIARO CHE POSSIAMO ASPETTARCI GRANDI COSE DA LEI. (MR. OLLIVANDER, HARRY POTTER E LA PIETRA FILOSOFALE)                        </p>
                        <button class="text-indigo-500 py-2 px-4 font-medium mt-4">Show more</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Tabs />
            </div>

            <div className="flex justify-center items-center">
                <ActualBook />
            </div>


        </>
    )
}

export default MySelf