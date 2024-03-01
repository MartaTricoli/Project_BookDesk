import Cart from "../components/ShopComponent/Cart";
import SearchBar from "../components/ShopComponent/SearchBar";
import BookCard from "../components/shared/BookCard";
import { Footer } from "../components/shared/Footer";

const Shop = () => {

    return (
      <>
      <SearchBar/>
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        </section>
        <Cart/>
      </>
    )
  }
  
  export default Shop;

  