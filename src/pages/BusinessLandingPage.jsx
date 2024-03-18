import BusinessNavbar from "../components/shared/BusinessNavbar";
import BusinessLandingPageHeader from "../components/landingPage components/BusinessLandingPageHeader";
import BusinessLandingPageKeySelling from "../components/landingPage components/BusinessLandingPageKeySelling";
import BusinessLandingPageReviews from "../components/landingPage components/BusinessLandingPageReviews";
import BusinessLandingPagePricing from "../components/landingPage components/BusinessLandingPagePricing ";
import BusinessLandingPageNewsLetter from "../components/landingPage components/BusinessLandingPageNewsLetter";
import { BusinessFooter } from "../components/shared/BusinessFooter";

const BusinessLandingPage = () => {
  return (
    <>
      <div className=" relative bg-white dark:bg-new_navy_blue">
        <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
          <BusinessNavbar />
          <BusinessLandingPageHeader />
          <BusinessLandingPageKeySelling />
          <BusinessLandingPageReviews />
          <BusinessLandingPagePricing />
        </div>
        <BusinessLandingPageNewsLetter />
        <div className=" absolute inset-0 flex justify-between h-full bg-new_navy_blue opacity-50 z-[-1]">
          <div className=" w-3/12 border-r border-dashed border-black"></div>
          <div className="w-3/12 border-l border-dashed border-black"></div>
        </div>
      </div>
      <BusinessFooter />
    </>
  );
};

export default BusinessLandingPage;
