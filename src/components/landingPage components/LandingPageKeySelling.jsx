const LandingPageKeySelling = () => {
  return (
    <>
      <section className="max-w-[1480px] backdrop-blur-md rounded-3xl mb-24 flex flex-col items-center">
        <h4 className="font-black text-4xl text-new_orange mt-10 mb-10 ">
          OUR NUMBERS
        </h4>
        <div className="flex mt-6 mb-[50px] flex-wrap">
          <div className="flex flex-col py-3 px-6 justify-center items-center grow max-968:w-30% max-576:w-6/12 max-576:border-b max-576:border-new_navy_blue gap-[25px]">
            <div className="font-semibold text-xl text-new_yellow leading-6">
              Active Users Now
            </div>
            <div className="font-semibold text-4xl text-new_navy_blue leading-[26px]">
              000,000,000
            </div>
          </div>
          <div className="flex flex-col py-3 px-6 justify-center items-center border-l border-new_navy_blue grow dark:border-new_grey max-968:w-30% max-576:w-6/12 max-576:border-b gap-[25px]">
            <div className="font-semibold text-xl text-new_yellow leading-6">
              TOTAL USERS
            </div>
            <div className="font-semibold text-4xl text-new_navy_blue leading-[26px]">
              000,000,000
            </div>
          </div>
          <div className="flex flex-col py-3 px-6 justify-center items-center border-l border-new_navy_blue grow dark:border-new_grey max-968:w-30% max-576:w-6/12 max-576:border-b gap-[25px]">
            <div className="font-semibold text-xl text-new_yellow leading-6">
              Market Cap
            </div>
            <div className="font-semibold text-4xl text-new_navy_blue leading-[26px]">
              €0 million
            </div>
          </div>
          <div className="flex flex-col py-3 px-6 justify-center items-center border-l border-new_navy_blue grow dark:border-new_grey max-576:w-[50%] max-576:border-b gap-[25px]">
            <div className="font-semibold text-xl text-new_yellow leading-6">
              Books Selled
            </div>
            <div className="font-semibold text-4xl text-new_navy_blue leading-[26px]">
              000,000,000
            </div>
          </div>
          <div className="flex flex-col py-3 px-6 justify-center items-center border-l border-new_navy_blue grow dark:border-new_grey gap-[25px]">
            <div className="font-semibold text-xl text-new_yellow leading-6">
              Books in our library
            </div>
            <div className="font-semibold text-4xl text-new_navy_blue leading-[26px]">
              000,000,000
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageKeySelling;
