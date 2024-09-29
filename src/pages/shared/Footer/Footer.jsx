import logo1 from '../../../assets/logo 2.png'
const Footer = () => {
    return (
        <div className=" bg-[#151515] ">
            <div className=" container mx-auto">
                <div className='mx-6 md:mx-8 xl:mx-0'>
                    <footer className="footer  py-[50px] md:py-[80px] lg:py-[110px] xl:py-[120px] ">
                        <aside>
                            <img className='' src={logo1} alt="" />
                            <p className='text-[#F3F3F3] opacity-90'>
                                ACME Industries Ltd.
                                <br />
                                Providing reliable tech since 1992
                            </p>
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