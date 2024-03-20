const BookInfo = () => {
  const handleAddToBookshelf = (event) => {
    const element = document.getElementById("book_personal_info");
    const rating = document.getElementById("rating");

    if (element.classList.contains("hidden") && event.target.value === "bookshelf") {
      event.target.classList.add("bg-new_light_blue");
      element.classList.remove("hidden");
    } else if (!element.classList.contains("hidden") && event.target.value !== "bookshelf") {
      event.target.classList.remove("bg-new_light_blue");
      element.classList.add("hidden");
      if (!rating.classList.contains("hidden")) {
        rating.classList.add("hidden");
      }
    }
  };

  const handleShowRating = (event) => {
    const element = document.getElementById("rating");
    const one_star = document.getElementById("one_star");
    const two_stars = document.getElementById("two_stars");
    const three_stars = document.getElementById("three_stars");
    const four_stars = document.getElementById("four_stars");
    const five_stars = document.getElementById("five_stars");

    const stars = [one_star, two_stars, three_stars, four_stars, five_stars];
    
    stars.forEach(star => {
      if (star.classList.contains("text-new_yellow")) {
        star.classList.remove("text-new_yellow");
        star.classList.add("text-gray-300");
      }
    });

    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }

    const index = stars.findIndex(star => event.target.value === star.id);

    for (let i = 0; i <= index; i++) {
      stars[i].classList.remove("text-gray-300");
      stars[i].classList.add("text-new_yellow");
    }
  }

  return (
    <>
      <div className="pt-28 pl-52 flex dark:bg-new_navy_blue">
        <img
          src="https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
          alt="book cover"
          className="pb-8 h-[850px]"
        />
        <div className="pl-10">
          <h3 className="font-bold text-5xl py-12 dark:text-white">
            The light beyond the garden wall
          </h3>
          <p className="font-bold text-4xl pb-8 dark:text-white">
            by <span className="text-new_pastel_blue dark:text-new_yellow">Scott Whitehead</span>
          </p>
          <div>
            <select
                name=""
                id=""
                className="text-lg font-semibold border-2 border-black"
                onChange={handleAddToBookshelf}
            >
                <option value="add">add</option>
                <option value="bookshelf" className="bg-new_light_blue">
                Add to your bookshelf
                </option>
                <option value="whishlist" className="bg-new_light_blue">
                Add to your whishlist
                </option>
            </select>
          </div>
          <div id="rating" className="flex items-center mt-12 hidden">
            <svg
              id="one_star"
              className="w-8 h-8 ms-3 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              id="two_stars"
              className="w-8 h-8 ms-3 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              id="three_stars"
              className="w-8 h-8 ms-3 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              id="four_stars"
              className="w-8 h-8 ms-3 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              id="five_stars"
              className="w-8 h-8 ms-3 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <table className="text-2xl mt-12">
            <tbody>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4 dark:text-white">Publisher:</td>
                <td className="p-4 dark:text-new_yellow">Lion Throne Press</td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4 dark:text-white">Genre:</td>
                <td className="p-4 dark:text-new_yellow">Narrative</td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4 dark:text-white">ISBN:</td>
                <td className="p-4 dark:text-new_yellow">0578489783</td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4 dark:text-white">Language:</td>
                <td className="p-4 dark:text-new_yellow">English</td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4 dark:text-white">Pages:</td>
                <td className="p-4 dark:text-new_yellow">176</td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold pr-20 p-4 dark:text-white">
                  Firsth pubblication year:
                </td>
                <td className="p-4 dark:text-new_yellow">2019</td>
              </tr>
            </tbody>
          </table>
          <table id="book_personal_info" className="text-2xl mb-8 hidden">
            <tbody>
              <tr className="border-black border-b-2">
                <td className="font-bold pr-32 p-4">Reading state:</td>
                <td className="p-4">
                  <select name="" id="">
                    <option value="">not started yet</option>
                    <option value="">reading</option>
                    <option value="">read</option>
                  </select>
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold pr-32 p-4">Reading start date:</td>
                <td className="p-4">
                  <input type="date" />
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4">Reading end date:</td>
                <td className="p-4">
                  <input type="date" />
                </td>
              </tr>
              <tr className="border-black border-b-2">
                <td className="font-bold p-4">Your rating:</td>
                <td className="p-4">
                  <select name="" id="" onChange={handleShowRating}>
                    <option value="rate">rate</option>
                    <option value="five_stars">5 starts </option>
                    <option value="four_stars">4 starts </option>
                    <option value="three_stars">3 starts </option>
                    <option value="two_stars">2 starts </option>
                    <option value="one_star">1 starts </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
