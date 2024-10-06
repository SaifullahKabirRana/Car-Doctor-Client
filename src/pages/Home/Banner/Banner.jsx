import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='mt-3 md:mt-4 lg:mt-6 '>
            <div className="carousel w-full "> 
                <div id="slide1" className="carousel-item relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-1 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide6" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide2" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-2 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide1" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide3" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-3 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide2" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide4" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-4 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide3" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide5" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[250px]  md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-5 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide4" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide6" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[250px] md:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]  bg-no-repeat  bg-cover   bg-top banner-6 rounded-xl">
                    <div className='absolute left-5 md:left-14 lg:left-20 xl:left-32 top-7 md:top-14 lg:top-24 xl:top-36 ' >
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold'>Affordable  </h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Price For Car</h2>
                        <h2 className='text-white text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold -mt-3 md:-mt-4 lg:-mt-5'>Servicing</h2>
                        <p className='text-white text-xs md:text-base lg:mt-2'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-7'>
                            <button className='text-white btn btn-sm md:btn-md border-none bg-[#FF3811] font-medium text-xs md:text-base'>Discover More</button>
                            <button className='btn  btn-sm md:btn-md text-white bg-transparent font-medium text-xs md:text-base'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute right-3 md:right-8 lg:right-14 bottom-0 md:bottom-5 lg:bottom-10 flex -translate-y-1/2 transform gap-2 md:gap-3 lg:gap-5">
                        <a href="#slide5" className="btn  btn-sm md:btn-md btn-circle  bg-[#FFFFFF33] text-white border-none font-bold"><FaArrowLeft /></a>
                        <a href="#slide1" className="btn btn-sm md:btn-md btn-circle bg-[#FF3811] text-white font-bold border-none"><FaArrowRight /></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;