import LogoImage from "../../assets/LandingPage/logo_without_bg.png";

const Logo = () => {
  return (
    <>
      <div className="flex items-center text-new_yellow font-normal">
        <img className="w-24 pr-2" src={LogoImage} alt="Website Logo" />
        <div className="hidden sm:block">
          <p className="h-15 text-3xl font-MontserratAlt ">BOOK DESK</p>
        </div>
      </div>
    </>
  );
};

export default Logo;
