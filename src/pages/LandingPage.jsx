import LandingPageHeader from "../components/landingPage components/LandingPageHeader";
import LandingPageKeySelling from "../components/landingPage components/LandingPageKeySelling";
import LandingPageReviews from "../components/landingPage components/LandingPageReviews";
import LandingPagePricing from "../components/landingPage components/LandingPagePricing";
import LandingPageNewsLetter from "../components/landingPage components/LandingPageNewsLetter";
import { Footer } from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import LowerNavbar from "../components/landingPage components/LowerNavbar";

const LandingPage = () => {
  return (
    <>
      <div className=" relative bg-white dark:bg-new_navy_blue">
        <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
          <Navbar />
          <LandingPageHeader />
          <LandingPageKeySelling />
          <LandingPageReviews />
          <LandingPagePricing />
          <LowerNavbar />
        </div>
        <LandingPageNewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
