import { Outlet } from "react-router-dom";
import { useState } from "react";
import BusinessInternNavbar from "../components/shared/BusinessInternNavbar";
import BusinessSidebar from "../components/shared/BusinessSidebar";
import { BusinessFooter } from "../components/shared/BusinessFooter";

export const BusinessBasePage = () => {
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
      <BusinessFooter />
    </>
  );
};
