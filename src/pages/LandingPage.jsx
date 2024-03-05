import LandingPageHeader from "../components/landingPage components/LandingPageHeader";
import LandingPageKeySelling from "../components/landingPage components/LandingPageKeySelling";
import LandingPageReviews from "../components/landingPage components/LandingPageReviews";
import LandingPagePricing from "../components/landingPage components/LandingPagePricing";
import LandingPageNewsLetter from "../components/landingPage components/LandingPageNewsLetter";
import { Footer } from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className=" relative bg-white">
        <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
          <Navbar />
          <LandingPageHeader />
          <LandingPageKeySelling />
          <LandingPageReviews />
          <LandingPagePricing />
        </div>
        <LandingPageNewsLetter />
        <div className=" absolute inset-0 flex justify-between h-full bg-new_navy_blue opacity-50 z-[-1]">
          <div className=" w-3/12 border-r border-dashed border-black"></div>
          <div className="w-3/12 border-l border-dashed border-black"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
