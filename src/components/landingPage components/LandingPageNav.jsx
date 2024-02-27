import Logo from "../../assets/LandingPage/logo_without_bg.png";

const LandingPageNav = () => {
  return (
    <>
      <nav className="h-20 w-full p-10 flex items-center justify-between border-b-2 border-solid border-new_navy_blue text-white mb-24 bg-new_navy_blue top-0 fixed z-[999]">
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
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Log In
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group "
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
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
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
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
