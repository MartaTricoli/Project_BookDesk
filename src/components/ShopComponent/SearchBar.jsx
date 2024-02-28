
const SearchBar = () => {
    return(
        <>
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

                            <input id="search-bar" placeholder="Inserisci una parola chiave, titolo, autore..." name="q"
                                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
                            <button type="submit"
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
                <h1 className="font-bold text-4xl mb-4 text-new_dark_blue">Scorri tra una vasta selezione di libri per trovare il tuo prossimo preferito!</h1>
                <h1 className="text-3xl text-new_navy_blue">-Libri in primo piano ed offerte speciali-</h1>
            </div>
        </>
    )
}

export default SearchBar;