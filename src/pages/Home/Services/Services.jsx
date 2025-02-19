import { useContext, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../../providers/AuthProvider";
import useServices from "../../../hooks/useServices";

const Services = () => {
    // const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const { loading } = useContext(AuthContext);
    const services = useServices(asc);
    

    // useEffect(() => {
    //     fetch('https://car-doctor-server-lilac-delta.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => {setServices(data)})
    // }, [])

    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader "></span>
        </div>
    }

    return (
        <div className="pt-4 md:pt-6  xl:pt-10">
            <div className="text-center">
                <h3 className="text-[#FF3811] text-base md:text-lg lg:text-xl font-bold">Service</h3>
                <h2 className="text-[#151515] text-3xl md:text-4xl xl:text-5xl font-bold mt-2 md:mt-3 lg:mt-4 xl:mt-5">Our Service Area</h2>
                <p className="text-[#737373] text-xs md:text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 xl:mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br className="hidden md:flex" /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => setAsc(!asc)}
                    className="btn text-xs md:text-sm  bg-[#FF3811] font-bold btn-sm md:btn-md text-white"> Price: {asc ? 'High to low' : 'Low to high'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-4 md:mt-7 xl:mt-10">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-6 md:mt-8 xl:mt-10">
                <button className="btn text-xs md:text-base bg-transparent  border-[#FF3811] text-[#FF3811] font-bold btn-sm md:btn-md lg:px-6">More Services</button>
            </div>
        </div>
    );
};

export default Services;