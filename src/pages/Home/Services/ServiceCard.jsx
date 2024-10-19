import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader "></span>
        </div>
    }
    return (
        <div>
            <div className="border rounded-xl">
                <div className="p-4 md:p-4 xl:p-6">
                    <div>
                        <img className="rounded-xl w-full h-[200px] md:h-[190px] xl:h-[220px] 2xl:h-[250px]" src={img} alt="" />
                    </div>
                    <div>
                        <h2 className="text-[#444444] text-xl md:text-2xl mt-3 md:mt-4 xl:mt-5 font-bold">{title}</h2>
                        <div className="flex justify-between items-center mt-3 md:mt-4 xl:mt-5 pb-1 md:pb-2">
                            <p className="text-[#FF3811] text-lg md:text-xl font-semibold hover:link">Price : ${price}</p>
                            <Link to={`/checkout/${_id}`} className="">
                                <FaArrowRight className="text-[#FF3811] text-xl xl:text-2xl hover:text-black" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;