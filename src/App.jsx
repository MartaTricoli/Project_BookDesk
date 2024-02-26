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
