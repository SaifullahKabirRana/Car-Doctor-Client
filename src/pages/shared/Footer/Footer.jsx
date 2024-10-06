import { useContext } from 'react';
import logo1 from '../../../assets/logo 2.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const {loading} = useContext(AuthContext);
    if(loading) {
        return;
    }
    return (
        <div className=" bg-[#151515] ">
            <div className=" container mx-auto">
                <div className='mx-6 md:mx-8 xl:mx-0 2xl:mx-10'>
                    <footer className="footer  py-[50px] md:py-[80px] lg:py-[110px] xl:py-[120px] ">
                        <aside>
                            <img className='' src={logo1} alt="" />
                            <p className='text-[#F3F3F3] opacity-80 text-xs md:text-sm mt-1 md:mt-2'>
                            Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.
                            </p>
                            <div className='flex gap-2 mt-2 md:mt-3 xl:mt-4'>
                                <div className='bg-[#FFFFFF] bg-opacity-10 rounded-full '><FaGoogle className='text-white text-2xl md:text-4xl p-1 md:p-2 ' /></div>
                                <div className='bg-[#FFFFFF] bg-opacity-10 rounded-full '><FaTwitter className='text-white text-2xl md:text-4xl p-1 md:p-2 ' /></div>
                                <div className='bg-[#FFFFFF] bg-opacity-10 rounded-full '><FaInstagram className='text-white text-2xl md:text-4xl p-1 md:p-2 ' /></div>
                                <div className='bg-[#FFFFFF] bg-opacity-10 rounded-full '><FaLinkedin className='text-white text-2xl md:text-4xl p-1 md:p-2 ' /></div>
                            </div>
                        </aside>
                        <nav>
                            <h6 className="text-lg font-bold text-[#FFFFFF]">About</h6>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Home</a>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Service</a>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Contact</a>

                        </nav>
                        <nav>
                            <h6 className="text-lg font-bold text-[#FFFFFF]">Company</h6>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Why Car Doctor</a>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">About</a>

                        </nav>
                        <nav>
                            <h6 className="text-lg font-bold text-[#FFFFFF]">Support</h6>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Support Center</a>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Feedback</a>
                            <a className="link link-hover text-[#F3F3F3] opacity-90">Accessibility</a>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;