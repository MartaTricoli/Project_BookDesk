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
            <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
                        alt=""
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Titolo Libro Bello
                    </h5>
                </div>
                <ul className="w-full">
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                        Autore
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                        Categoria
                    </li>
                    <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                        Pagine Attuali
                    </li>
                </ul>
                <div className="p-6 flex flex-row max-sm:flex-col">
                    <a
                        type="button"
                        href="#"
                        className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
                        Info libro
                    </a>
                    <a
                        type="button"
                        href="#"
                        className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
                        Guarda nel market
                    </a>
                </div>
                <div style={{ width: `${progressValue}%` }} className="h-5 bg-new_light_blue flex"></div>


                <div>
                    <div className="mt-2 h-auto w-full bg-neutral-200 dark:bg-neutral-600 flex flex-row">
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-1/2 p-2 border rounded mr-2"
                            placeholder="Inserisci il numero"
                        />

                        <button class="relative inline-block text-lg group" onClick={updateProgress}>
                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-new_light_blue group-hover:-rotate-180 ease"></span>
                                <span class="relative">Aggiorna</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActualBook;
