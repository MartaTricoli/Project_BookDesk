import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"


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
  const user = useSelector((state) => state.auth.user)


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
                    <svg viewBox="-0.5 0 155 155" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <path d="M147.754 8.64794L148.453 8.51304C149.253 8.35804 150.009 8.21147 150.746 8.03896C151.547 7.87683 152.27 7.45016 152.799 6.82776C153.328 6.20529 153.633 5.42313 153.664 4.60663C153.695 3.79013 153.452 2.98673 152.973 2.32536C152.493 1.66399 151.805 1.18296 151.019 0.959567C149.476 0.499892 147.875 0.269647 146.265 0.276516C142.223 0.374445 138.116 0.51743 134.142 0.655565C128.745 0.842344 123.165 1.03614 117.679 1.1198C92.8631 1.49984 65.7555 1.84758 34.8053 2.18222C27.9566 2.25681 20.9996 2.08473 14.8615 1.93427C12.9062 1.88628 10.9113 1.72665 8.98328 1.57295C7.74566 1.47437 6.50802 1.37868 5.26976 1.3041C2.62532 1.15494 1.60164 2.60113 1.2146 3.84632C0.636316 5.70761 1.46616 7.48116 3.37931 8.47601C3.9443 8.75728 4.52506 9.0056 5.1187 9.21988L5.48175 9.36016C5.48175 10.6105 5.48436 11.8539 5.48955 13.0905C5.49668 15.9998 5.50509 19.0078 5.47591 21.9489C5.39682 30.0693 5.21661 38.327 5.03962 46.3124C4.54367 68.8734 4.03149 92.2025 5.75274 115.158C6.04123 119.005 7.28212 120.359 10.8582 120.732C13.8611 121.075 16.8823 121.233 19.9046 121.205C28.6075 121.016 37.4536 120.76 46.0086 120.512C49.506 120.409 53.004 120.309 56.5027 120.211C56.9981 120.197 57.4947 120.199 58.1332 120.203C57.9219 120.462 57.7164 120.715 57.518 120.958C56.6032 122.078 55.813 123.044 55.0791 124.061C50.5351 130.352 45.3843 137.486 40.3762 144.617C39.4934 145.968 38.8161 147.443 38.3664 148.993C38.0689 149.87 38.0693 150.822 38.3673 151.699C38.6654 152.577 39.2446 153.331 40.015 153.845C40.7204 154.367 41.576 154.645 42.4533 154.639C43.5487 154.624 44.6078 154.244 45.4634 153.56C46.2835 152.899 47.0182 152.138 47.6508 151.296C54.1851 142.884 60.7057 134.461 67.3198 125.919L72.0596 119.796L90.0384 119.208L93.6041 124.903C96.5403 129.598 99.4272 134.215 102.325 138.826C102.829 139.627 103.33 140.43 103.829 141.233C105.59 144.06 107.411 146.982 109.349 149.764C110.428 151.275 111.804 152.551 113.392 153.512C114.265 154.094 115.305 154.368 116.351 154.291C117.397 154.216 118.387 153.793 119.167 153.092C120.014 152.4 120.613 151.451 120.874 150.387C121.134 149.324 121.042 148.206 120.61 147.2C120.009 145.727 119.259 144.319 118.371 142.999C114.856 137.749 111.326 132.508 107.779 127.279C106.039 124.706 104.3 122.132 102.563 119.557C102.488 119.442 102.42 119.322 102.361 119.198C102.656 119.165 102.923 119.139 103.181 119.133C106.397 119.071 109.613 119.014 112.829 118.961C120.249 118.831 127.923 118.702 135.469 118.49C137.359 118.398 139.243 118.193 141.109 117.876C142.082 117.73 143.09 117.579 144.076 117.466C146.625 117.175 148.189 115.589 148.725 112.752C148.912 111.555 148.986 110.344 148.946 109.133V108.985C148.937 104.387 148.934 99.7898 148.936 95.191C148.936 83.341 148.932 71.0882 148.787 59.0358C148.657 48.2487 148.381 37.2842 148.116 26.6812C147.992 21.7113 147.872 16.7412 147.756 11.7712C147.739 10.9703 147.743 10.1682 147.749 9.33292C147.751 9.10853 147.753 8.88011 147.754 8.64794ZM16.4381 111.194L16.3895 111.18L16.3487 110.93C16.262 110.458 16.2037 109.981 16.1743 109.503C16.0498 106.325 15.9151 103.147 15.7704 99.9694C15.4385 92.4211 15.0948 84.616 14.9762 76.9406C14.7999 65.6106 14.7344 54.0869 14.6722 42.9431C14.6313 35.7631 14.5892 28.3382 14.5179 21.0357C14.4939 18.5544 14.3273 16.0789 14.1516 13.4575C14.0828 12.4289 14.0122 11.3765 13.948 10.2902C47.1633 11.3894 80.8383 10.6791 113.412 9.98651C121.645 9.81271 130.149 9.63313 138.545 9.48396V108.065C97.2164 107.474 56.2862 108.554 16.89 111.28C16.7368 111.266 16.5854 111.238 16.4381 111.194Z" fill="white" />
                        <path d="M129.763 30.0757C130.806 28.9307 131.543 27.5392 131.902 26.0315C132.084 25.364 132.101 24.6619 131.95 23.9865C131.8 23.311 131.486 22.6827 131.037 22.1561C130.588 21.6296 130.017 21.2205 129.374 20.9648C128.732 20.7092 128.036 20.6147 127.348 20.6893C126.033 20.8397 124.777 21.3187 123.694 22.0824C122.265 23.1156 120.908 24.2456 119.633 25.4641L119.298 25.77C109.536 34.6674 99.7584 43.5905 89.9658 52.5385L81.165 60.5736L81.1436 60.5635C77.8146 56.7287 73.7458 53.7084 69.8106 50.788C67.8566 49.3385 65.8358 47.8384 63.9434 46.2644C61.319 44.084 59.3683 44.0225 56.4879 46.031C54.9151 47.1538 53.4837 48.4624 52.2246 49.9286C49.4181 53.1297 46.5999 56.4139 43.8751 59.5885C41.6618 62.1679 39.4431 64.742 37.2189 67.3103C35.1374 69.7027 33.0437 72.0855 30.9375 74.4578C28.2367 77.5163 25.4438 80.6792 22.7352 83.8259C21.5741 85.1223 20.6579 86.6191 20.0311 88.2437C19.8824 88.8689 19.877 89.5194 20.0152 90.1472C20.1534 90.775 20.4317 91.3632 20.8291 91.8677C21.0832 92.1713 21.4018 92.4145 21.7618 92.5792C22.1217 92.7439 22.5138 92.8263 22.9095 92.8198C23.6723 92.7997 24.4139 92.5643 25.049 92.1414C25.5619 91.8113 26.0322 91.4189 26.4493 90.9741L28.7832 88.5245C36.9778 79.934 45.4511 71.0517 53.7579 62.2884C55.1387 60.8318 56.4885 59.2982 57.918 57.6736C58.4788 57.0368 59.0597 56.3765 59.6684 55.6884C60.6802 56.7512 61.6788 57.8037 62.6643 58.8466C65.6394 61.9881 68.4498 64.9568 71.3659 67.9076C72.728 69.2909 74.2729 70.4816 75.9578 71.4473C78.2671 72.7547 80.4733 72.7651 82.3346 71.4778C83.8257 70.4784 85.2636 69.4031 86.6432 68.2546L90.922 64.5916C100.21 56.6405 109.813 48.419 119.184 40.2448C122.973 36.936 126.508 33.3988 129.763 30.0757Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="153" height="155" fill="white" transform="translate(0.777344)" />
                        </clipPath>
                      </defs>
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
                       {user.first_name} {user.last_name}
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
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer">
                  <div className="w-6 h-6">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xml:space="preserve">
                      <g>
                        <polygon fill="white" stroke="white" strokeWidth="2" strokeMiterlimit="10" points="32,1 26,1 26,10 20,12 14,6 6,14 12,20 
		10,26 1,26 1,38 10,38 12,44 6,50 14,58 20,52 26,54 26,63 32,63 38,63 38,54 44,52 50,58 58,50 52,44 54,38 63,38 63,26 54,26 
		52,20 58,14 50,6 44,12 38,10 38,1 	"/>
                        <circle fill="black" stroke="white" strokeWidth="2" strokeMiterlimit="10" cx="32" cy="32" r="6" />
                      </g>
                    </svg>
                  </div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Settings
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
                    My Books
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
                      Market
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
