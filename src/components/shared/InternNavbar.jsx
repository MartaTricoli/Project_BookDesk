import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers/authSlice";

const InternNavbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="h-20 w-full px-8 flex items-center justify-between items-center text-white mb-24 bg-new_pastel_blue top-0 fixed z-[999]">
        {/* logo */}
        <div className="">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/* searchbar */}
        <div className="">
          <input type="serch" />
          <button>search</button>
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
          <div className="max-w-lg w-full"></div>
        
      </nav>
    </>
  );
};

export default InternNavbar;
