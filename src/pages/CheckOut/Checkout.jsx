import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const services = useLoaderData();
    const { title, _id, price } = services;
    const {user} = useContext(AuthContext);

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        // const service = form.service.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order);
    }
    return (
        <div>
           
            <div className="">
                <div className="bg-[#F3F3F3] py-6 md:py-8 lg:py-12 xl:py-20  px-5 md:px-10 lg:px-14 xl:px-28 rounded-xl">
                    <form onSubmit={handleCheckOut}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 xl:gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" 
                                defaultValue={user?.displayName}
                                className="input w-full text-[#A2A2A2] " required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Service</span>
                                </label>
                                <div className="flex relative">
                                    <input
                                        type='text'
                                        name="service" placeholder="Your Service"
                                        defaultValue={title} className="input w-full text-[#A2A2A2]  " required />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email"
                                defaultValue={user?.email}
                                className="input w-full text-[#A2A2A2] " required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Due amount</span>
                                </label>
                                <div className="flex relative disabled:input">
                                    <input
                                        type='text'
                                        name="text" placeholder="Due Amount"
                                        defaultValue={"$" + price}
                                        
                                        className="input  w-full text-[#A2A2A2]  " required />
                                </div>

                            </div>
                        </div>

                        <div className="form-control mt-5 md:mt-6 xl:mt-7">
                            <input className="btn bg-[#FF3811] text-white text-[16px] md:text-[20px] font-semibold" type="submit" value="Order Confirm" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;