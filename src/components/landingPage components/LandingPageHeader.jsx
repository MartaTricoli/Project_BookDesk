const LandingPageHeader = () => {
  return (
    <>
      <header className="max-w-[1480px]  border-[1px] border-3xl min-h-[50vh]  flex flex-col justify-around items-center p-10 backdrop-blur-md rounded-3xl mb-24 mt-40">
        <div className="w-full h-full font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-orange-500/60 to-50% to-orange-500">
          Trusted by the most passionate readers in:
          <span className="ml-4 text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden ">
            <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
              <li>Literary Discoveries</li>
              <li>Bookworm Communities</li>
              <li>Book Marketplace</li>
              <li>Reading Analytics</li>
              <li>Interactive Forums</li>
              <li aria-hidden="true">Literary Discoveries</li>
            </ul>
          </span>
        </div>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-new_orange rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-new_orange group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-new_orange transition-all duration-300 transform group-hover:translate-x-full ease">
            Get Started
          </span>
          <span className="relative invisible">Button Text</span>
        </a>
      </header>
    </>
  );
};

export default LandingPageHeader;
