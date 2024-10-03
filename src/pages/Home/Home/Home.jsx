import { useContext } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Information from "../Information/Information";
import Services from "../Services/Services";
import { AuthContext } from "../../../providers/AuthProvider";
import OurTeam from "../OurTeam/OurTeam";
import Features from "../Features/Features";


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader "></span>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
            <OurTeam></OurTeam>
            <Features></Features>

            <div>


                {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 xl:gap-6 mt-4 md:mt-6 xl:mt-8'>
                    <div className="border rounded-xl p-4 md:p-3 lg:p-4 xl:p-6">
                        <img className='rounded-xl w-full' src={img1} alt="" />
                        <div className='text-center'>
                            <h2 className='text-[#444444] text-xl xl:text-2xl font-bold mt-3 md:mt-4 xl:mt-5'>Car Engine Plug</h2>
                            <p className='text-[#737373] text-base md:text-xl mt-1 xl:mt-2'>Engine Expert</p>
                            <div className='flex justify-center items-center gap-2 xl:gap-3  mt-2 xl:mt-3'>
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={facebook} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={twitter} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={linkin} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={instagram} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="border rounded-xl p-4 md:p-3 lg:p-4 xl:p-6">
                        <img className='rounded-xl w-full' src={img2} alt="" />
                        <div className='text-center'>
                            <h2 className='text-[#444444] text-xl xl:text-2xl font-bold mt-3 md:mt-4 xl:mt-5'>Car Engine Plug</h2>
                            <p className='text-[#737373] text-base xl:text-xl mt-1 xl:mt-2'>Engine Expert</p>
                            <div className='flex justify-center items-center gap-2 xl:gap-3 mt-2 xl:mt-3'>
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={facebook} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={twitter} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={linkin} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={instagram} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="border rounded-xl p-4 md:p-3 lg:p-4 xl:p-6">
                        <img className='rounded-xl w-full' src={img3} alt="" />
                        <div className='text-center'>
                            <h2 className='text-[#444444] text-xl xl:text-2xl font-bold mt-3 md:mt-4 xl:mt-5'>Car Engine Plug</h2>
                            <p className='text-[#737373] text-base xl:text-xl mt-1 xl:mt-2'>Engine Expert</p>
                            <div className='flex justify-center items-center gap-1 xl:gap-3  mt-2 xl:mt-3'>
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={facebook} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={twitter} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={linkin} alt="" />
                                <img className='w-[30px] md:w-[30px] xl:w-[40px]' src={instagram} alt="" />
                            </div>
                        </div>

                    </div>
                </div> */}

            </div>




        </div>
    );
};

export default Home;