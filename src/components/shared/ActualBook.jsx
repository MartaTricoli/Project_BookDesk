import React, { useState } from 'react';

const ActualBook = () => {
    const [progressValue, setProgressValue] = useState(33);
    const [inputValue, setInputValue] = useState("");

    const updateProgress = () => {
        const newValue = parseInt(inputValue, 10);

        if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
            setProgressValue(newValue);
        }

        setInputValue("");
    };

    return (
        <>
            <div className="dark:border-2 dark:border-indigo-500 flex flex-row max-w-[50rem] justify-center rounded-lg bg-white dark:bg-new_navy_blue">
                <div className='flex flex-col justify-center center-intems'>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat w-[400px]">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
                            alt=""
                        />
                    </div>
                    <div style={{ width: `${progressValue}%` }} className="h-5 bg-new_light_blue flex"></div>


                    <div>
                        <div className="mt-2 h-auto w-full dark:bg-new_navy_blue flex flex-row">
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-1/2 p-2 border rounded mr-2 border-2 border-black"
                                placeholder="pagina"
                            />

                            <button className="relative inline-block text-lg group" onClick={updateProgress}>
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-new_light_blue group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Aggiorna</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>



                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-white">
                            Titolo Libro Bello
                        </h5>
                    </div>
                    <ul className="w-full">
                        <li className="w-full px-6 py-3 dark:border-opacity-50 dark:text-white ">
                            Autore:
                        </li>
                        <li className="w-full px-6 py-3 dark:border-opacity-50 dark:text-white">
                            Categoria:
                        </li>
                        <li className="w-full px-6 py-3 dark:border-opacity-50 dark:text-white">
                            Anno di pubblicazione:
                        </li>

                    </ul>
                    <div className="p-6 flex flex-row max-sm:flex-col gap-8">
                        <button className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-new_light_blue group-hover:-rotate-180 ease"></span>
                                <span className="relative">Info Libro</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                        <button className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-new_light_blue group-hover:-rotate-180 ease"></span>
                                <span className="relative">Mercato</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </div>
                    <ul>

                        <li className="w-full px-6 py-3 dark:border-opacity-50 dark:text-white">
                            Pagine totali
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default ActualBook;
