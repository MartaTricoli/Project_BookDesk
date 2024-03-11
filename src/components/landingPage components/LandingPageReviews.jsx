import BgGradientSx from "../shared/BgGradientSx";

const LandingPageReviews = () => {
  return (
    <>
      <section
        id="testimonies"
        className="relative w-full flex flex-col justify-center items-center mb-10 mt-10 z-10 dark:bg-new_navy_blue"
      >
        <div className="container w-full flex justify-center items-center ">
          <h3 className="font-black text-3xl sm:text-4xl text-new_dark_blue dark:text-new_yellow mt-10 mb-10">
            WHY DO OUR USERS CHOOSE US
          </h3>
        </div>
        <div className="w-full inline-flex flex-nowrap mb-10 gap-6">
          <ul className="flex items-center justify-center gap-6 [&_li]:mx-4 [&_img]:max-w-non animate-infinite-scroll">
            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="gray"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6 [&_li]:mx-4 [&_img]:max-w-non animate-infinite-scroll">
            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-new_light_blue to-new_pastel_blue blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 w-[400px] h-[300px]">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Tim Cook
                          </h3>
                          <p className="text-black text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-black text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>

                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="rotate-[10deg] absolute sm:w-[480px] w-[400px] h-auto sm:right-60 right-0 sm:-bottom-52 -bottom-44"
          data-name="Layer 1"
          viewBox="0 0 895.01001 602.68057"
        >
          <path
            d="M528.9264,397.79261a7.74428,7.74428,0,0,0-10.77619-.74018,7.429,7.429,0,0,0-.85423.88247l-25.43913-9.09873-9.15854,11.28393,36.196,8.69647a7.72281,7.72281,0,0,0,9.41776-.4472,7.39069,7.39069,0,0,0,.74928-10.42513Q528.99493,397.8675,528.9264,397.79261Z"
            transform="translate(-152.495 -148.65972)"
            fill="#a0616a"
          />
          <polygon
            points="271.509 536.444 285.395 536.443 292.001 482.879 271.506 482.881 271.509 536.444"
            fill="#a0616a"
          />
          <path
            d="M423.51434,699.59033l42.70332-.00161v-.54a16.62223,16.62223,0,0,0-16.62132-16.62106h-.001l-7.80031-5.91772-14.55365,5.91862-3.72772.00013Z"
            transform="translate(-152.495 -148.65972)"
            fill="#2f2e41"
          />
          <polygon
            points="174.175 510.901 185.534 518.887 221.749 478.871 204.982 467.083 174.175 510.901"
            fill="#a0616a"
          />
          <path
            d="M317.937,671.12877l34.93271,24.56176.31064-.44177a16.62224,16.62224,0,0,0-4.03594-23.15684l-.00084-.00059-2.97685-9.32752-15.30945-3.5298-3.04939-2.14409Z"
            transform="translate(-152.495 -148.65972)"
            fill="#2f2e41"
          />
          <path
            d="M368.67557,418.62743l-1.15381,2.465c-7.58447,16.20317-9.5237,34.316-6.5763,51.962a2.94343,2.94343,0,0,1-.11755,2.09368c-1.82791,2.144,1.03992,11.45883,2.68378,16.66l1.48164,9.19749s-2.45683,8.54207,1.27492,7.91429-1.82526,8.48364,1.73437,10.76624l9.234,57.32155-38.52491,63.49476,14.26848,20.6893L410.05417,587.709l.71342-66.34846,8.5611,53.50682.71342,84.18406L446,656.292l-.988-89.27237,1.42685-105.21883-14.26849-48.93978Z"
            transform="translate(-152.495 -148.65972)"
            fill="#2f2e41"
          />
          <path
            d="M373.52323,270.23519l36.38464.71343,7.13424,17.8356,14.26848,4.28055,12.12822,29.96381L436.30456,417.914l-77.76324,7.13425,3.56713-7.84767S347.84,417.914,352.83393,412.92s14.58868-3.88731,9.79133-9.79132-5.51078-10.18455-5.51078-10.18455l-2.14028-29.2504-5.35068-62.42461L366.389,288.0708Z"
            transform="translate(-152.495 -148.65972)"
            fill="#0077b5"
          />
          <path
            d="M336.43665,474.33816a7.74427,7.74427,0,0,1,1.918-10.62994,7.42951,7.42951,0,0,1,1.0646-.61245l-2.60044-26.8919L350,430.08334l-.42055,37.2237a7.7228,7.7228,0,0,1-2.737,9.02236,7.39068,7.39068,0,0,1-10.29176-1.82328Q336.49251,474.42293,336.43665,474.33816Z"
            transform="translate(-152.495 -148.65972)"
            fill="#a0616a"
          />
          <path
            d="M356.32715,299.73458s-21.21362-.41219-21.93675,38.76335c0,0-25.73342,53.66638-10.00987,72.99818l10.17558,39.378,17.88476-1.67075,1.495-32.5743s24.92418-35.04168,19.38217-68.671Z"
            transform="translate(-152.495 -148.65972)"
            fill="#0077b5"
          />
          <path
            d="M429.88375,292.35134s9.63122,8.20438,27.82354,33.53094c0,0,27.11012,39.23833,24.25642,54.93366l12.12821,3.56713,2.8537,27.11012-29.6071-7.491s-38.1682-31.74738-36.74135-47.44271S429.88375,292.35134,429.88375,292.35134Z"
            transform="translate(-152.495 -148.65972)"
            fill="#0077b5"
          />
          <circle cx="240.10275" cy="90.87296" r="24.95861" fill="#a0616a" />
          <path
            d="M385.31262,238.88019q.03207-.41737.08561-.83469A1.87094,1.87094,0,0,1,385.31262,238.88019Z"
            transform="translate(-152.495 -148.65972)"
            fill="#2f2e41"
          />
          <path
            d="M418.05167,210.34322c-.74913-2.93216-3.59568-5.422-6.60631-5.06529-1.87631.22116-3.47438,1.42685-5.20089,2.18307-4.84414,2.11885-16.90812-2.39-22.13753-1.66943-5.23656.72771-10.25905,5.87147-8.611,10.894-13.56407,1.44383-19.38407,13.4162-14.59668,26.468,3.74409,10.20745,17.97121,20.31117,28.82236,21.0175-1.3341-6.29241-9.0605-13.3339-10.3946-19.61917a12.80132,12.80132,0,0,1-.37809-5.18661,4.3903,4.3903,0,0,1,3.3174-3.6242,2.87791,2.87791,0,0,1,3.13194,2.30439,11.74043,11.74043,0,0,1,17.77138-8.40416l-3.46009-4.70858a27.32057,27.32057,0,0,0,15.11032,2.34,3.62565,3.62565,0,0,0,.12127-1.35548,2.73359,2.73359,0,0,0-1.51246-2.22588,6.33069,6.33069,0,0,1,3.9096,3.07486,12.445,12.445,0,0,0,7.39106-4.944C426.38446,219.2824,418.80076,213.27538,418.05167,210.34322Z"
            transform="translate(-152.495 -148.65972)"
            fill="#2f2e41"
          />
          <path
            d="M546.365,382.292h-39a7.5,7.5,0,0,0-7.5,7.5v5.17823a7.5,7.5,0,0,0,7.5,7.5h14.90759l-5.3891,51.28894a7.48311,7.48311,0,0,0-3.482,5.41668L508.45,497.86027a7.49827,7.49827,0,0,0,3.05975,7.04224l-16.548,157.49158-23.669,34.19628H278.83325a3,3,0,0,0,0,6h14.99323a19.87181,19.87181,0,1,0,23.82061,0H472.865a3.00085,3.00085,0,0,0,2.4668-1.293l19.5332-28.22168v25.7536a19.87168,19.87168,0,1,0,6,.03912V663.62571l16.54626-157.475a7.49725,7.49725,0,0,0,5.9173-6.386L528.28,461.0803a7.49556,7.49556,0,0,0-5.27924-8.1264l5.30445-50.48364H546.365a7.5,7.5,0,0,0,7.5-7.5V389.792A7.5,7.5,0,0,0,546.365,382.292Z"
            transform="translate(-152.495 -148.65972)"
            fill="#3f3d56"
          />
        </svg>
      </section>
      <BgGradientSx />
    </>
  );
};

export default LandingPageReviews;
