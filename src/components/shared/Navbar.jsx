import Logo from "../../assets/LandingPage/logo_without_bg.png";

const LandingPageNav = () => {
  return (
    <>
      <nav className="h-20 w-full py-10 px-16 flex items-center justify-between border-b-2 border-solid border-new_navy_blue text-white mb-24 bg-new_navy_blue top-0 fixed z-[998]">
        <a>
          <div className="flex items-center text-new_orange ">
            <img className="h-20 w-30" src={Logo} alt="Website Logo" />
            <p className="h-15 text-3xl font-MontserratAlt">BOOK DESK</p>
          </div>
        </a>
        <div
          className="flex items-center font-semibold gap-10
          "
        >
          <a className="hover:text-new_orange" href="#">
            Home
          </a>
          <div className="h-4 w-[1px] bg-[#e7e3eb] rounder-[25%] mx-2 "></div>
          <a className="hover:text-new_orange" href="#">
            About
          </a>
          <div className="h-4 w-[1px] bg-[#e7e3eb] rounder-[25%] mx-2 "></div>
          <a className="hover:text-new_orange" href="#">
            Services
          </a>
          <div className="h-4 w-[1px] bg-[#e7e3eb] rounder-[25%] mx-2 "></div>
          <a className="hover:text-new_orange" href="#">
            Contact
          </a>
        </div>
        <div className="flex">
          <button
            type="button"
            class="px-5 py-3 text-base font-medium text-center text-new_orange
             bg-transparent rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LogIn
          </button>
          <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-new_orange rounded-full shadow-md group "
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
            <span className="absolute flex items-center justify-center w-full h-full text-new_orange transition-all duration-300 transform group-hover:translate-x-full ease">
              Get Started
            </span>
            <span className="relative invisible">Get Started</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default LandingPageNav;
