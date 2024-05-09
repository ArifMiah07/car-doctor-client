import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    }, [])

    return (
        <div>
            <div className="text-center">
                <h4 className="text-[#FF3811] text-[20px] font-semibold  ">Service</h4>
                <h1 className="text-[#151515] text-[45px] font-bold  ">Our Service Area</h1>
                <p className="tet-[#737373]  ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;