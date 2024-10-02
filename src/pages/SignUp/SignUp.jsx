import { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import SocialMedia from '../Login/SocialMedia';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, logOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            return setRegisterError('password should be at least 6 characters or longer')
        }
        setRegisterError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Register');
                logOut();
                setTimeout(() => {
                    navigate('/login')
                },1500);
            })
            .catch(error => {
                setRegisterError(error.code);
            })
    }
    return (
        <div className='mt-6 md:mt-8 lg:mt-10 md:mx-4 lg:mx-16 xl:mx-24 2xl:mx-32 mb-10 md:mb-16 lg:mb-20 xl:mb-28'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
                <div className='flex'>
                    <img className='w-[200px] md:w-[500px] lg:w-[550px] xl:w-[400px] 2xl:w-[450px] mx-auto' src={login} alt="" />
                </div>
                <div className='border rounded-lg md:w-full xl:w-[550px] mx-2 md:mx-0'>
                    <div className='p-6 xl:p-16 '>
                        <h2 className='text-center text-[#444444] text-2xl md:text-3xl lg:text-4xl font-semibold'>Sign Up</h2>
                        <div className='mt-4 md:mt-6 lg:mt-8 xl:mt-10'>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-[#444444] font-semibold text-base md:text-lg">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Your name" className="input input-bordered w-full text-[#A2A2A2] " required />
                                </div>
                                <div className="form-control mt-2 md:mt-3 xl:mt-4">
                                    <label className="label">
                                        <span className="text-[#444444] font-semibold text-base md:text-lg">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full text-[#A2A2A2] " required />
                                </div>
                                <div className="form-control mt-2 md:mt-3 xl:mt-4">
                                    <label className="label">
                                        <span className="text-[#444444] font-semibold text-base md:text-lg">Confirm Password</span>
                                    </label>
                                    <div className="flex relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password" placeholder="Your password" className="input input-bordered w-full text-[#A2A2A2]  " required />
                                        <span className="absolute right-5 top-3 text-xl md:text-2xl " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEyeClosed /> : <VscEye />}</span>
                                    </div>

                                </div>
                                <div className="ml-2 mb-3 md:mb-4">
                                    {
                                        registerError && <p className="text-[12px] md:text-[15px] text-red-600">{registerError}</p>
                                    }
                                </div>
                                <div className="form-control mt-6 md:mt-7 xl:mt-8">
                                    <button className="btn bg-[#FF3811] text-white text-[16px] md:text-[20px] font-semibold">Sign Up</button>
                                </div>

                            </form>

                            <div className='mt-4 md:mt-5 xl:mt-7 text-center'>
                                <h2 className='text-[#444444] text-base md:text-lg '>Or Sign Up with</h2>
                                <SocialMedia></SocialMedia>
                                <p className='mt-5 md:mt-7 xl:mt-10 text-[#737373] text-sm md:text-[17px]'>Already have an account? <Link className='text-[#FF3811] font-semibold hover:link' to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className=''
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            >
            </ToastContainer>
        </div>
    );
};

export default SignUp;