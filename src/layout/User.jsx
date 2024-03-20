import { Route, Routes } from "react-router-dom";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/myprofile" element={<Profile />} />
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
        </Route>
      </Routes>
    </>
  );
};

export default User;
