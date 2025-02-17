import { useEffect, useState } from "react";

const useServices = (asc) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/services?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc])
    return services;
};

export default useServices;