import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DevAtWork } from "./components/__componet/DevAtWork";
import { BasePage } from "./pages/BasePage";
import Shop from "./pages/Shop";
import { Feed } from "./components/__componet/Feed";
import { Follow } from "./components/__componet/Follow";
import { AllUsers } from "./components/__componet/AllUsers";
import MySelf from "./pages/Profile";
import { Stats } from "./components/__componet/Stats";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      
        <Route path="/" element={<BasePage />}>
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/shop" element={<Shop />} />
            <Route path="/myprofile" element={<MySelf />}/>
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/follow" element={<Follow />} />
            <Route path="/feed/allusers" element={<AllUsers />} />
          </Route>
          <Route path="/stats" element={<Stats />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
