import time from '../../../assets/timetable.png'
import phone from '../../../assets/phone.png'
import location from '../../../assets/location.png'

const Information = () => {
    return (
        <div className="bg-[#151515] rounded-xl mt-10 md:mt-14 xl:mt-24 mb-10 md:mb-14 xl:mb-24 ">
            <div className=" py-10 md:py-14 xl:py-20 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
                    <div className="flex justify-center items-center gap-2 md:gap-2 xl:gap-4">
                        <div>
                            <img className='w-[35px] md:w-[30px] xl:w-[45px]' src={time} alt="" />
                        </div>
                        <div className='text-white'>
                            <h2 className='text-[11px] lg:text-sm xl:text-base font-medium'>We are open monday-friday</h2>
                            <p className='text-base lg:text-lg xl:text-2xl font-bold'>7:00 am - 9:00 pm</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 md:gap-2 xl:gap-4 -ml-5 md:-ml-0">
                        <div>
                            <img className='w-[35px] md:w-[30px] lg:w-[40px] xl:w-[45px]' src={phone} alt="" />
                        </div>
                        <div className='text-white'>
                            <h2 className=' text-[11px] lg:text-sm xl:text-base font-medium'>Have a question?</h2>
                            <p className='text-base lg:text-lg xl:text-2xl font-bold'>+2546 251 2658</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 md:gap-2 xl:gap-4 ml-4">
                        <div>
                            <img className='w-[35px] md:w-[30px] xl:w-[45px]' src={location} alt="" />
                        </div>
                        <div className='text-white'>
                            <h2 className='text-[11px] lg:text-sm xl:text-base font-medium'>Need a repair? our address</h2>
                            <p className='text-base lg:text-lg xl:text-2xl font-bold'>Liza Street, New York</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;