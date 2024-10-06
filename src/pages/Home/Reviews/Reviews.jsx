import img1 from '../../../assets/images/review/Ellipse 2 (1).png';
import img2 from '../../../assets/images/review/Ellipse 2 (2).png';
import quote from '../../../assets/images/review/quote 1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, FreeMode } from 'swiper/modules';
import '../OurTeam/swiper.css';
const Reviews = () => {
    return (
        <div className='mt-10 md:mt-12 xl:mt-20 mb-14 md:mb-16 xl:mb-28'>
            <div className="text-center">
                <h3 className="text-[#FF3811] text-base md:text-lg lg:text-xl font-bold">Testimonial</h3>
                <h2 className="text-[#151515] text-3xl md:text-4xl xl:text-5xl font-bold mt-2 md:mt-3 lg:mt-4 xl:mt-5">What Customer Says</h2>
                <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 xl:mt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:flex' /> words which don't look even slightly believable. </p>
            </div>
            <div className='mt-4 md:mt-6 xl:mt-8 xl:-mx-10 hidden md:flex'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    navigation={true}

                    modules={[Navigation, FreeMode]}
                    className="mySwiper "
                >
                    <SwiperSlide >
                        <div className='border border-[#F3F3F3] xl:mx-10'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img1} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Awlad Hossain</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    {/*right side*/}
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] xl:mx-10'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img2} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Fahad Wasif</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Engineer</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] xl:mx-10'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img1} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Sen Joseph</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Doctor</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] xl:mx-10'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img2} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Awlad Hossain</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

            {/* for mobile device */}
            <div className='mt-4 md:mt-6 xl:mt-8 xl:-mx-10 flex md:hidden -mx-4'>
                <Swiper
                    freeMode={true}
                    navigation={true}
                    modules={[Navigation, FreeMode]}
                    className="mySwiper "
                >
                    <SwiperSlide >
                        <div className='border border-[#F3F3F3] mx-8'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img1} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Awlad Hossain</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    {/*right side*/}
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] mx-8'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img2} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Fahad Wasif</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Engineer</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] mx-8'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img1} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Sen Joseph</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Doctor</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border border-[#F3F3F3] mx-8'>
                            <div className='py-5 md:py-7 xl:py-12 pl-5 md:pl-7 xl:pl-12  md:pr-5 xl:pr-6 '>
                                <div className='flex gap-12 md:gap-16 xl:gap-20'>
                                    <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
                                        <img className='w-[45px] md:w-[40px] lg:w-[50px] xl:w-[60px]  h-[45px] md:h-[40px] lg:h-[50px] xl:h-[60px]' src={img2} alt="" />
                                        <div>
                                            <h2 className='text-[#444444] text-lg md:text-sm lg:text-xl xl:text-2xl font-bold'>Habib Wahid</h2>
                                            <p className='text-[#737373] text-sm  md:text-xs lg:text-base xl:text-xl font-semibold'>Banker</p>
                                        </div>
                                    </div>
                                    <img className='w-[35px] md:w-[35px] lg:w-[45px] xl:w-[55px] h-[35px] md:h-[35px] lg:h-[45px] xl:h-[55px]' src={quote} alt="" />
                                </div>
                                <p className='text-[#737373] text-xs lg:text-sm xl:text-base mt-3 md:mt-4 xl:mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating mt-3 md:mt-4 xl:mt-5 w-[80px] md:w-[80px] xl:w-[110px]">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>



        </div>
    );
};

export default Reviews;