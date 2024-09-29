import { Link, NavLink } from "react-router-dom";
import logo1 from '../../../assets/logo.svg';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="mt-2 md:mt-4 lg:mt-6 ">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-5 lg:-ml-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            id="nav"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow ">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-[60px] md:w-[80px] lg:w-[90px] xl:w-[100px] -ml-1 lg:-ml-0" src={logo1} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul
                    id="nav"
                    className="menu menu-horizontal px-1 text-sm font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3 md:gap-6 xl:gap-8">
                    <div className="flex justify-center items-center gap-2 md:gap-3 xl:gap-5">
                        <div className="text-xl md:text-[25px]">
                            <HiOutlineShoppingBag />
                        </div>
                        <div className="text-xl md:text-[25px]">
                        <IoSearchOutline />
                        </div>
                    </div>
                    <button className="btn text-xs bg-transparent  border-[#FF3811] text-[#FF3811] font-bold btn-sm md:btn-md lg:px-6 ">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;