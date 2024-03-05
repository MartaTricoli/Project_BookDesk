import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import Sidebar from "../components/shared/Sidebar";
import { useState } from "react";
import InternNavbar from "../components/shared/InternNavbar";

export const BasePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <InternNavbar />
      <div>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
