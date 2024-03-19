import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import Sidebar from "../components/shared/Sidebar";
import { useState } from "react";
import BusinessInternNavbar from "../components/shared/BusinessInternNavbar";
import BusinessSidebar from "../components/shared/BusinessSidebar";

export const BasePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <BusinessInternNavbar />
      <div>
        <BusinessSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
