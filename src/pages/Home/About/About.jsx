import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="mt-10 md:mt-16 lg:mt-20 xl:mt-24 mb-4 md:mb-8 xl:mb-28 2xl:mb-36">
            <div className=" ">
                <div className="flex flex-col md:flex-row">
                    <div className='lg:w-2/5 relative'>
                        <img className='h-[300px] md:h-[300px] lg:h-[330px] xl:h-[450px] w-[280px] md:w-[700px] lg:w-[330px] xl:w-[460px] rounded-xl' src={person} alt="" />
                        <img className='h-[220px] md:h-[200px] lg:h-[240px] xl:h-[320px]  w-[210px] md:w-[200px] lg:w-[240px] xl:w-[320px] absolute right-0 md:-right-7 lg:-right-4 xl:-right-2 2xl:right-10 top-[45%] md:top-[40%] lg:top-[45%] xl:top-1/2 border-8 border-white rounded-xl' src={parts} alt="" />
                    </div>
                    <div className='lg:w-3/5 md:ml-10 lg:ml-10 xl:ml-0 xl:px-14 2xl:px-20 mt-12 md:mt-0'>
                        <h2 className='text-base md:text-lg lg:text-xl text-[#FF3811] font-bold'>About Us</h2>
                        <h1 className="text-[#151515] text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 lg:mt-5">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-3 md:mt-4 lg:mt-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-2 md:mt-3 lg:mt-5">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
                        </p>
                        <button className="btn btn-sm md:btn-md bg-[#FF3811] text-white font-semibold mt-4 md:mt-5 lg:mt-6 md:px-6 text-xs md:text-base">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;