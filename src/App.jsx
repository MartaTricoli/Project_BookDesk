import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DevAtWork } from "./components/__componet/DevAtWork";
import { BasePage } from "./pages/BasePage";
import Shop from "./pages/Shop";
import { Feed } from "./components/__componet/Feed";
import { Follow } from "./components/__componet/Follow";
import { AllUsers } from "./components/__componet/AllUsers";
import MySelf from "./pages/Profile";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      
        <Route path="/" element={<BasePage />}>
          <Route path="/base/devatwork" element={<DevAtWork />} />
          <Route path="/base/shop" element={<Shop />} />
          <Route path="/base/myprofile" element={<MySelf />}/>
          <Route path="/base/feed" element={<Feed />}>
            <Route path="/base/feed/follow" element={<Follow />} />
            <Route path="/base/feed/allusers" element={<AllUsers />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
