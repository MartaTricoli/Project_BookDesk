import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers/authSlice";
import DarkModeToggle from "./DarkmodeToggle";

const BusinessInternNavbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="h-20 w-full px-8 flex items-center justify-between items-center text-white mb-24 bg-new_red dark:bg-new_dark_blue top-0 fixed gap-20 z-[999]">
        {/* logo */}
        <div className="w-[420px]">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/* searchbar */}
        <div className="flex items-center justify-center w-full ">
          <form action="/search" className="max-w-[768px] w-full">
            <label
              className="mx-auto relative bg-white min-w-sm w-w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                placeholder="Inserisci una parola chiave, titolo, autore..."
                name="q"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none text-black bg-white"
                required=""
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-new_navy_blue border-new_navy_blue text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Cerca
                  </span>
                </div>
              </button>
            </label>
          </form>
        </div>
        {/* Logout */}
        <div className="">
          <button
            className="flex items-center justify-center gap-4"
            onClick={handleLogout}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 384.971 384.971"
              xmlSpace="preserve"
            >
              <g>
                <g id="Sign_Out">
                  <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z" />
                  <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
            </svg>
            Logout
          </button>
        </div>
        <div className="">
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
};

export default BusinessInternNavbar;
