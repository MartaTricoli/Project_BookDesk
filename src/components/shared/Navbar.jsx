import Logo from "./Logo";

const LandingPageNav = () => {
  return (
    <>
      <nav className="h-20 w-full py-10 px-16 flex items-center justify-between border-b-2 border-solid text-white mb-24 bg-new_pastel_blue top-0 fixed z-[998]">
        <Logo />
        <div
          className="flex items-center font-medium gap-20 text-2xl
          "
        >
          <a className="hover:text-new_light_blue" href="#">
            Home
          </a>
          <a className="hover:text-new_light_blue" href="#">
            About
          </a>
          <a className="hover:text-new_light_blue" href="#">
            Services
          </a>
          <a className="hover:text-new_light_blue" href="#">
            Contact
          </a>
        </div>
        <div className="flex">
          <a href="#_" class=" inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold leading-6 text-white bg-new_pastel_blue border-2 border-transparent rounded-full md:w-auto hover:bg-new_pastel_blue hover:text-new_light_blue hover:border-white focus:outline-none focus:ring-2 focus:ring-new_pastel_blue">
            Login
          </a>
          <a
            href="#_"
            class="ml-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group "
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="#0077b5"
                stroke="#0077b5"
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
            <span className="text-lg absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
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
