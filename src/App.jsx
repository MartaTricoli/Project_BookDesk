import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DevAtWork } from "./components/__componet/DevAtWork";
import { BasePage } from "./pages/BasePage";
import Shop from "./pages/Shop";
import { Feed } from "./components/__componet/Feed";
import { Follow } from "./components/__componet/Follow";
import { AllUsers } from "./components/__componet/AllUsers";
import MySelf from "./pages/Profile";
import { Stats } from "./components/__componet/Stats";
import AllMyBooks from "./pages/AllMyBooks";
import BooksRead from "./pages/BooksRead";
import BooksNotRead from "./pages/BooksNotRead";
import FavouriteBooks from "./pages/FavouriteBooks";
import Wishlist from "./pages/Wishlist";
import User from "./layout/User";
import BusinessLandingPage from "./pages/BusinessLandingPage";
import { useSelector } from "react-redux";
import BookInfo from "./pages/BookInfo";

const App = () => {

  const ProtectedRoute = ({ children, identity }) => {
    const auth = useSelector((state) => state.auth);
  
    if (auth.token === null || auth.identity !== identity) {
      return <Navigate to="/" />;
    }
  
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<BusinessLandingPage />} />
        <Route path="/" element={
          <ProtectedRoute identity="user">
            <BasePage />
          </ProtectedRoute>}
        >
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/myprofile" element={<MySelf />} />
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/follow" element={<Follow />} />
            <Route path="/feed/allusers" element={<AllUsers />} />
          </Route>
          <Route path="/stats" element={<Stats />} />
          <Route path="/allmybooks" element={<AllMyBooks />} />
          <Route path="/mybooksread" element={<BooksRead />} />
          <Route path="/mybooksnotread" element={<BooksNotRead />} />
          <Route path="/myfavouritebooks" element={<FavouriteBooks />} />
          <Route path="/mywishlist" element={<Wishlist />} />
          <Route path="/infobook" element={<BookInfo />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
