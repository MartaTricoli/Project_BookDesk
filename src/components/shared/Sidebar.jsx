import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dropdownsInitialState = [false, false, false];
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
          className={`mt-20 fixed top-0 left-0 z-40 min-w-[fit-content] h-screen ${
            isSidebarOpen ? "" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#0077b5]">
            <ul className="space-y-2 font-medium">
              <li>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer">
                  <div className="w-6 h-6">{/* Icon */}</div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Dashboard
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer">
                  <div className="w-6 h-6">{/* Icon */}</div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Impostazioni
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(0)}
                >
                  <div className="w-6 h-6">{/* Icon */}</div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    <Link to="myprofile" />
                    Profilo
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(1)}
                >
                  <div className="w-6 h-6">{/* Icon */}</div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Libreria
                  </span>
                </div>
                {dropdownsOpen[1] && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link to="/librerie" />
                      <span className="text-sm text-white hover:text-[#0077b5]">
                        Librerie
                      </span>
                    </li>
                    <li>
                      <Link to="/libri" />
                      <span className="text-sm text-white hover:text-[#0077b5]">
                        Libri
                      </span>
                    </li>
                    <li>
                      <Link to="/prestiti" />
                      <span className="text-sm text-white hover:text-[#0077b5]">
                        Prestiti
                      </span>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-new_dark_blue dark:hover:bg-gray-700 group cursor-pointer"
                  onClick={() => toggleDropdown(2)}
                >
                  <div className="w-6 h-6">{/* Icon */}</div>
                  <span className="ms-3 max-[1080px]:hidden text-white">
                    Altro
                  </span>
                </div>
                {dropdownsOpen[2] && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link to="/about" />
                      <span className="text-sm text-white hover:text-[#0077b5]">
                        About
                      </span>
                    </li>
                    <li>
                      <Link to="/support" />
                      <span className="text-sm text-white hover:text-[#0077b5]">
                        Support
                      </span>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
