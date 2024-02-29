import { Link } from "react-router-dom";
import LogoImage from "../../assets/LandingPage/logo_without_bg.png"

const Logo = () => {
    return(
        <>
            <Link to="">
                <div className="flex items-center text-new_yellow font-normal">
                    <img className="w-24 pr-2" src={LogoImage} alt="Website Logo" />
                    <p className="h-15 text-3xl font-MontserratAlt">BOOK DESK</p>
                </div>
            </Link>
        </>
    )
}

export default Logo;