import { Outlet } from "react-router-dom"
import { Footer } from "../components/shared/Footer"
import Sidebar from "../components/shared/Sidebar"
import Navbar from "../components/shared/Navbar"
import { useState } from "react"

export const BasePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
    return(
        <>
            <Navbar />
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Outlet />
            <Footer />
        </>
    )
}