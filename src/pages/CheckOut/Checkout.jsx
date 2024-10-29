import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const services = useLoaderData();
    const { img, title, _id, price } = services;
    const { user } = useContext(AuthContext);

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const date = form.date.value
        const order = {
            customerName: name,
            img,
            email,
            phone,
            service: title,
            service_id: _id,
            price: price,
            date
        }
        console.log(order);

        fetch('https://car-doctor-server-lilac-delta.vercel.app/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Confirm your order",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }
    return (
        <div>

            <div className="mt-8 md:mt-10 xl:mt-14 mb-8 md:mb-10 xl:mb-16">
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
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Phone</span>
                                </label>
                                <div className="flex relative ">
                                    <input
                                        type='number'
                                        name="phone" placeholder="Your Phone"
                                        className="input  w-full text-[#A2A2A2]  " required />
                                </div>

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Due amount</span>
                                </label>
                                <div className="flex relative disabled:input">
                                    <input
                                        type='text'
                                        name="price" placeholder="Due Amount"
                                        defaultValue={"$" + price}
                                        className="input  w-full text-[#A2A2A2]  " required />
                                </div>

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-[#444444] font-semibold text-base md:text-lg">Date</span>
                                </label>
                                <div className="flex relative disabled:input">
                                    <input
                                        type='date'
                                        name="date"
                                        className="input  w-full text-[#A2A2A2]  " required />
                                </div>

                            </div>
                        </div>

                        <div className="form-control mt-6 md:mt-8 xl:mt-10">
                            <input className="btn bg-[#FF3811] text-white text-[16px] md:text-[20px] font-semibold" type="submit" value="Order Confirm" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;