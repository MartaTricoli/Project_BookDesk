import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dropdownsInitialState = [false, false, false, false];
  const [dropdownsOpen, setDropdownsOpen] = useState(dropdownsInitialState);

  const toggleDropdown = (index) => {
    const updatedDropdowns = dropdownsOpen.map((state, i) =>
      i === index ? !state : false
    );
    setDropdownsOpen(updatedDropdowns);
  };

  return (
    <>
      <div>
        <button
          id="closeSidebar"
          onClick={toggleSidebar}
          className="fixed z-[999] top-8 transform -translate-y-1/2 m-4 p-2 text-gray-900 bg-gray-200 dark:bg-gray-700 opacity-25 hover:opacity-100 rounded-md min-[1400px]:hidden"
        >
          <div className="w-6 h-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>
        <aside
          id="separator-sidebar"
          className={`mt-20 fixed top-0 left-0 z-40 min-w-[fit-content] h-screen ${isSidebarOpen ? "" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-new_pastel_blue dark:bg-new_dark_blue">
            <ul className="space-y-2 font-medium">
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(0)}
                >
                  <div className="w-6 h-6">
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6,23H18a3,3,0,0,0,3-3V4a3,3,0,0,0-3-3H6A3,3,0,0,0,3,4V20A3,3,0,0,0,6,23ZM19,9.5v5h-.132L17.9,12.553a1,1,0,0,0-1.79.894l.527,1.053H15V12a1,1,0,0,0-2,0v2.5H12V13a1,1,0,0,0-2,0v1.5H5v-5ZM18,21H14V19a1,1,0,0,0-2,0v2H11V19a1,1,0,0,0-2,0v2H8V20a1,1,0,0,0-2,0v1a1,1,0,0,1-1-1V16.5H19V20A1,1,0,0,1,18,21ZM6,3H18a1,1,0,0,1,1,1V7.5H14.868L13.9,5.553a1,1,0,1,0-1.79.894L12.632,7.5H11V5A1,1,0,0,0,9,5V7.5H8V6A1,1,0,0,0,6,6V7.5H5V4A1,1,0,0,1,6,3Z" />
                    </svg>
                  </div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Dashboard
                  </span>
                </div>
                {dropdownsOpen[0] && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        to="myprofile"
                        className="text-gray-100 hover:text-black"
                      >
                       Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="mystats"
                        className="text-gray-100 hover:text-black"
                      >
                        My Reads
                      </Link>
                    </li>
                    <li>
                      <span className="text-sm text-white hover:text-black">
                        Letture negli anni
                      </span>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer">
                  <div className="w-6 h-6">
                    <svg
                      fill="white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M461.913,0H83.478C55.86,0,33.391,22.469,33.391,50.087v38.957H16.696C7.475,89.044,0,96.519,0,105.739s7.475,16.696,16.696,16.696h16.696v66.783H16.696C7.475,189.217,0,196.693,0,205.913c0,9.22,7.475,16.696,16.696,16.696h16.696v66.783H16.696C7.475,289.391,0,296.867,0,306.087s7.475,16.696,16.696,16.696h16.696v66.783H16.696C7.475,389.565,0,397.04,0,406.261s7.475,16.696,16.696,16.696h16.696v38.956C33.391,489.531,55.86,512,83.478,512h378.435C489.531,512,512,489.531,512,461.913V50.087C512,22.469,489.531,0,461.913,0z M133.565,478.609H83.478c-9.206,0-16.696-7.49-16.696-16.696v-38.956h16.696c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696H66.783v-66.783h16.696c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696H66.783v-66.783h16.696c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.696-16.696-16.696H66.783v-66.783h16.696c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696H66.783V50.087c0-9.206,7.49-16.696,16.696-16.696h50.087V478.609z M478.609,461.913c0,9.206-7.49,16.696-16.696,16.696H166.957V33.391h294.956c9.206,0,16.696,7.49,16.696,16.696V461.913z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M426.519,223.678c-13.007-14.458-31.014-22.42-50.702-22.42c-20.965,0-39.234,9.257-53.034,26.82c-13.801-17.563-32.069-26.82-53.034-26.82c-19.689,0-37.696,7.962-50.703,22.42c-12.269,13.638-19.027,31.826-19.027,51.213c0,41.805,31.826,67.606,75.876,103.318c10.852,8.797,23.152,18.77,36.023,29.801c3.127,2.68,6.995,4.019,10.865,4.019c3.87,0,7.739-1.34,10.866-4.019c12.87-11.03,25.17-21.003,36.023-29.801c44.05-35.711,75.876-61.513,75.876-103.318C445.547,255.505,438.789,237.316,426.519,223.678z M348.642,352.271c-7.948,6.443-16.66,13.507-25.859,21.195c-9.199-7.688-17.911-14.751-25.859-21.195c-42.894-34.775-63.514-52.59-63.514-77.38c0-19.508,12.735-40.241,36.339-40.241c26.86,0,36.527,31.8,36.978,33.337c2.042,7.17,8.583,12.164,16.046,12.164c7.487,0,14.047-4.942,16.066-12.151c0.397-1.361,10.042-33.349,36.981-33.349c23.603,0,36.339,20.733,36.339,40.241C412.156,299.68,391.536,317.496,348.642,352.271z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M428.522,89.044H217.043c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h211.478c9.22,0,16.696-7.475,16.696-16.696S437.742,89.044,428.522,89.044z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Impostazioni
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(2)}
                >
                  <div className="w-6 h-6">
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6,23H18a3,3,0,0,0,3-3V4a3,3,0,0,0-3-3H6A3,3,0,0,0,3,4V20A3,3,0,0,0,6,23ZM19,9.5v5h-.132L17.9,12.553a1,1,0,0,0-1.79.894l.527,1.053H15V12a1,1,0,0,0-2,0v2.5H12V13a1,1,0,0,0-2,0v1.5H5v-5ZM18,21H14V19a1,1,0,0,0-2,0v2H11V19a1,1,0,0,0-2,0v2H8V20a1,1,0,0,0-2,0v1a1,1,0,0,1-1-1V16.5H19V20A1,1,0,0,1,18,21ZM6,3H18a1,1,0,0,1,1,1V7.5H14.868L13.9,5.553a1,1,0,1,0-1.79.894L12.632,7.5H11V5A1,1,0,0,0,9,5V7.5H8V6A1,1,0,0,0,6,6V7.5H5V4A1,1,0,0,1,6,3Z" />
                    </svg>
                  </div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    libreria
                  </span>
                </div>
              </li>
              {dropdownsOpen[2] && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="allmybooks"
                      className="text-gray-100 hover:text-black"
                    >
                      Tutti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mybooksread"
                      className="text-gray-100 hover:text-black"
                    >
                      Letti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mybooksnotread"
                      className="text-gray-100 hover:text-black"
                    >
                      Da leggere
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="myfavouritebooks"
                      className="text-gray-100 hover:text-black"
                    >
                      Preferiti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mywishlist"
                      className="text-gray-100 hover:text-black"
                    >
                      Wishlist
                    </Link>
                  </li>
                </ul>
              )}

              <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <Link to="shop">
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(3)}
                >
                  <div className="w-6 h-6">
                    <svg
                      fill="white"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 483.688 483.688"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M473.6,92.43c-8.7-10.6-21.9-16.5-35.6-16.5H140.7c-8.5,0-16.6,2.4-23.6,6.7l-15.2-53.1c-2.5-8.7-10.4-14.7-19.4-14.7H59.4
		H15.3c-8.4,0-15.3,6.8-15.3,15.3v1.6c0,8.4,6.8,15.3,15.3,15.3h57.8l29.5,104.3l40.6,143.9c-23.1,5.8-40.2,26.7-40.2,51.5
		c0,28.1,21.9,51.2,49.6,53c-2.3,6.6-3.4,13.9-2.8,21.4c2,25.4,22.7,45.9,48.1,47.6c30.3,2.1,55.6-22,55.6-51.8c0-6-1-11.7-2.9-17.1
		h60.8c-2.5,7.1-3.5,15-2.6,23.1c2.8,24.6,23.1,44,47.9,45.8c30.3,2.1,55.7-21.9,55.7-51.8c0-28.9-24-52-52.8-52H156.5
		c-9.9,0-18.3-7.7-18.7-17.5c-0.4-10.4,7.9-18.9,18.2-18.9h30.5h165.3h46.5c20.6,0,38.6-14.1,43.6-34.1l40.4-162.6
		C485.8,117.83,482.6,103.53,473.6,92.43z M360.5,399.73c9.4,0,17.1,7.7,17.1,17.1s-7.7,17.1-17.1,17.1s-17.1-7.7-17.1-17.1
		S351,399.73,360.5,399.73z M201.6,399.73c9.4,0,17.1,7.7,17.1,17.1s-7.7,17.1-17.1,17.1c-9.4,0-17.1-7.7-17.1-17.1
		C184.5,407.43,192.1,399.73,201.6,399.73z M138.8,151.13l-7.8-27.5c-1.2-4.2,0.5-7.3,1.7-8.8c1.1-1.5,3.7-4,8-4h32.6l8.9,40.4
		h-43.4V151.13z M148.6,185.93h41.2l8.2,37.4h-38.9L148.6,185.93z M186.5,293.53c-4.5,0-8.5-3-9.7-7.4l-7.9-28h36.7l7.8,35.3h-26.9
		V293.53z M273.6,293.53H249l-7.8-35.3h32.3v35.3H273.6z M273.6,223.33h-40l-8.2-37.4h48.2V223.33z M273.6,151.13h-55.8l-8.9-40.4
		h64.7V151.13z M336,293.53h-27.5v-35.3h34.9L336,293.53z M350.8,223.33h-42.3v-37.4h50.2L350.8,223.33z M308.5,151.13v-40.4h66
		l-8.5,40.4H308.5z M408.2,285.93c-1.1,4.5-5.1,7.7-9.8,7.7h-26.8l7.5-35.3h36L408.2,285.93z M423.7,223.33h-37.3l7.9-37.4H433
		L423.7,223.33z M448.5,123.23l-6.9,27.8h-40l8.5-40.4h28.6c4.3,0,6.8,2.4,7.9,3.9C447.8,116.03,449.6,119.13,448.5,123.23z"
                        />
                      </g>
                    </svg>
                  </div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                      Mercato
                  </span>
                </div>
                
              </li>
                    </Link>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
