import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DevAtWork } from "./components/__componet/DevAtWork";
import { BasePage } from "./pages/BasePage";
import { Feed } from "./components/__componet/Feed";
import { Follow } from "./components/__componet/Follow";
import { AllUsers } from "./components/__componet/AllUsers";
import MySelf from "./pages/Profile";
import AllMyBooks from "./pages/AllMyBooks";
import BooksRead from "./pages/BooksRead";
import BooksNotRead from "./pages/BooksNotRead";
import FavouriteBooks from "./pages/FavouriteBooks";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./hooks/ScrollToTop";
import StatsPage from "./pages/StatPage";
import BusinessLandingPage from "./pages/BusinessLandingPage";
import { useSelector } from "react-redux";
import BookInfo from "./pages/BookInfo";
import BookSearchEMilio from "./components/shared/BookSearchEMilio";
import { BusinessBasePage } from "./pages/BusinessBasePage";
import BusinessProfile from "./pages/BusinessProfile";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<BusinessLandingPage />} />
        <Route path="/" element={
          <ProtectedRoute identity="user">
            <BasePage />
          </ProtectedRoute>}
        >
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/shop" element={<BookSearchEMilio />} />
          <Route path="/myprofile" element={<MySelf />} />
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/follow" element={<Follow />} />
            <Route path="/feed/allusers" element={<AllUsers />} />
          </Route>
          <Route path="/mystats" element={<StatsPage />} />
          <Route path="/allmybooks" element={<AllMyBooks />} />
          <Route path="/mybooksread" element={<BooksRead />} />
          <Route path="/mybooksnotread" element={<BooksNotRead />} />
          <Route path="/myfavouritebooks" element={<FavouriteBooks />} />
          <Route path="/mywishlist" element={<Wishlist />} />
          <Route path="/infobook" element={<BookInfo />} />
        </Route>
        <Route path="/business" element={
          <ProtectedRoute identity="publisher">
            <BusinessBasePage />
          </ProtectedRoute>
        }>
          <Route path="/business/myprofile" element={<BusinessProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
