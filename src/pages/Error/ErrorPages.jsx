import { Link } from 'react-router-dom';
import error from '../../assets/error.png'
import Navbar from '../shared/Navbar/Navbar';
import { HiHome } from "react-icons/hi2";
const ErrorPages = () => {
    return (
        <div>
            <div className='flex justify-center my-32 md:my-24 xl:my-24 2xl:my-32'>
                <div><img className='w-[300px] md:w-[500px] xl:w-[700px]' src={error} alt="" /></div>
            </div>
            <div className='text-center -mt-20 md:-mt-8'>
                <Link to={'/'}>
                    <button className='btn text-xs md:text-lg bg-transparent  border-[#FF3811] text-[#FF3811] font-bold btn-sm md:btn-md lg:px-6 '>Back to Home <HiHome /></button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPages;