import team from '../../../assets/icons/group.svg';
import support from '../../../assets/icons/person.svg';
import equipment from '../../../assets/icons/Wrench.svg';
import delivery from '../../../assets/icons/deliveryt.svg';
import check from '../../../assets/icons/check.svg';
import time from '../../../assets/icons/time.png';

const Features = () => {
    return (
        <div className='mt-9 md:mt-14 xl:mt-20'>
            <div className="text-center">
                <h3 className="text-[#FF3811] text-base md:text-lg lg:text-xl font-bold">Core Features</h3>
                <h2 className="text-[#151515] text-3xl md:text-4xl xl:text-5xl font-bold mt-2 md:mt-3 lg:mt-4 xl:mt-5">Why Choose Us</h2>
                <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 xl:mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:flex' /> words which don't look even slightly believable.  </p>

            </div>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-1 md:gap-4 lg:gap-2 xl:gap-5 mt-4 md:mt-6 xl:mt-8'>
                <div className='hover:bg-[#FF3811] hover:text-white border rounded-xl px-1 xl:px-5 py-5 lg:py-7'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px]' src={team} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg  font-bold text-center mt-1 md:mt-2'>Expert Team</h2>
                </div>
                <div className=' border rounded-xl px-1 xl:px-5 py-5 lg:py-7 hover:bg-[#FF3811] hover:text-white'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px] bg-black rounded-full' src={time} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg  font-bold text-center mt-1 md:mt-2'>Timely Delivery</h2>
                </div>
                <div className='hover:bg-[#FF3811] hover:text-white border rounded-xl px-1 xl:px-5 py-5 lg:py-7'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px]' src={support} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg font-bold text-center mt-1 md:mt-2'>24/7 Support</h2>
                </div>
                <div className='hover:bg-[#FF3811] hover:text-white border rounded-xl px-1 xl:px-5 py-5 lg:py-7'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px]' src={equipment} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg  font-bold text-center mt-1 md:mt-2'>Best Equipment</h2>
                </div>
                <div className='hover:bg-[#FF3811] hover:text-white border rounded-xl px-1 xl:px-5 py-5 lg:py-7'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px]' src={check} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg  font-bold text-center mt-1 md:mt-2'>100% Guaranty</h2>
                </div>
                <div className='hover:bg-[#FF3811] hover:text-white border rounded-xl px-1 xl:px-5 py-5 lg:py-7'>
                    <div className='flex justify-center '>
                        <img className='w-[35px] md:w-[50px] lg:w-[40px] xl:w-[55px] h-[35px] md:h-[50px] lg:h-[40px] xl:h-[55px]' src={delivery} alt="" />
                    </div>
                    <h2 className='text-xs md:text-base lg:text-sm xl:text-lg  font-bold text-center mt-1 md:mt-2'>Timely Delivery</h2>
                </div>
            </div>
        </div>

    );
};

export default Features;