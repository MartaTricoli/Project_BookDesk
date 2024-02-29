import { useState } from "react";
import Logo from "./Logo";
import GetStarted from "../landingPage components/GetStarted";
import Login from "../landingPage components/Login";

const LandingPageNav = () => {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGetStartedBtnClick = () => {
    setShowGetStartedModal(!showGetStartedModal);
  };

  const handleCloseGetStartedModal = () => {
    setShowGetStartedModal(false);
  };

  const handleLogInBtnClick = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <nav className="h-20 w-full py-10 px-16 flex items-center justify-between border-b-2 border-solid text-white mb-24 bg-[#0077b5] top-0 fixed z-[998]">
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
          <button
            onClick={handleLogInBtnClick}
            type="button"
            class="px-5 py-3 text-base font-medium text-center text-white
             bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LogIn
          </button>
          {showLoginModal && (
            <div
              onClick={handleCloseLoginModal}
              className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 z-[1000]"
            >
              <Login />
            </div>
          )}
          <a
            onClick={handleGetStartedBtnClick}
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group "
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
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Get Started
            </span>
            <span className="relative invisible">Get Started</span>
          </a>
          {showGetStartedModal && (
            <div
              onClick={handleCloseGetStartedModal}
              className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 z-[1000]"
            >
              <GetStarted />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default LandingPageNav;
