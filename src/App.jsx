import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import MySelf from "./pages/Profile";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <LandingPage />
      <Shop />
      <div className="flex flex-col">
        <div className="min-w-[1080px]:ml-[138px] ml-[65px] h-full">
          <MySelf />
        </div>

        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      
    </>
  );
};

export default App;

import { Outlet, Route, Routes } from "react-router-dom"
import { DevAtWork } from "./components/__componet/DevAtWork"
import { Footer } from "./components/shared/Footer"
import { BasePage } from "./pages/BasePage"
import { Feed } from "./components/__componet/Feed"
import { Tutti } from "./components/__componet/Tutti"
import { Seguiti } from "./components/__componet/Seguiti"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/tutti" element={<Tutti />}/>
            <Route path="/feed/seguiti" element={<Seguiti />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
