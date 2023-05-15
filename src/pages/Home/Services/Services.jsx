import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="w-1/2 mx-auto text-center mt-12">
                <h4 className="text-orange-600 font-bold mb-4">Service Area</h4>
                <h1 className="font-extrabold text-5xl mb-4">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;