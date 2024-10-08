import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMedia = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(location?.state ? location.state : '/');
                }
            })
            .catch()
    }
    return (
        <div>
            <div className=''>
                <div className='flex gap-3 md:gap-3 xl:gap-4 justify-center mt-3 md:mt-4 xl:mt-5'>
                    <button className='btn btn-sm md:btn-md btn-circle'><FaFacebookF className="text-base md:text-xl text-[#3B5998]" /></button>
                    <button className='btn btn-sm md:btn-md btn-circle'><BiLogoLinkedin className="text-base md:text-xl text-[#0A66C2]" /></button>
                    <button onClick={() => handleSocialLogin(googleLogin)} className='btn btn-sm md:btn-md btn-circle'><FcGoogle className="
                    text-base md:text-xl"/></button>

                </div>
            </div>
        </div>
    );
};

export default SocialMedia;