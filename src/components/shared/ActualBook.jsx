import React, { useState } from 'react';

const ActualBook = () => {
    const [progressValue, setProgressValue] = useState(30); // Imposta il valore iniziale del caricamento

    // Funzione per aggiornare il valore di progresso (puoi chiamarla quando vuoi aggiornare la barra di caricamento)
    const updateProgress = (newValue) => {
        setProgressValue(newValue);
    };

    return (
        <>
            <div
                className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
                        alt=""
                    />
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Titolo Libro Bello
                    </h5>
                </div>
                <ul className="w-full">
                    <li
                        className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                        Autore
                    </li>
                    <li
                        className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                        Categoria
                    </li>
                    <li
                        className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
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
             
                <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600">
                    <div style={{ width: `${progressValue}%` }} className="h-5 bg-new_light_blue"></div>
                </div>
            </div>
        </>
    );
};

export default ActualBook;
