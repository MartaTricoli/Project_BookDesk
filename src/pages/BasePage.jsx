import { Outlet } from "react-router-dom"
import { Footer } from "../components/shared/Footer"
import Sidebar from "../components/shared/Sidebar"

export const BasePage = () => {
    return(
        <>
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}