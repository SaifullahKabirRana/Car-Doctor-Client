import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import linkin from '../../../assets/linkin.png'
import twitter from '../../../assets/twitter.png'
const OurTeam = () => {
    return (
        <div className="mt-4 md:mt-6 xl:mt-10 mx-4 md:px-0">
            <div className="text-center">
                <h3 className="text-[#FF3811] text-base md:text-lg lg:text-xl font-bold">Team</h3>
                <h2 className="text-[#151515] text-3xl md:text-4xl xl:text-5xl font-bold mt-2 md:mt-3 lg:mt-4 xl:mt-5">Meet Our Team</h2>
                <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 xl:mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br className="hidden md:flex" /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 xl:gap-6 mt-4 md:mt-6 xl:mt-8'>
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
                </div>
            </div>
        </div>
    );
};

export default OurTeam;