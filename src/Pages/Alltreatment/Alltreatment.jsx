import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/Services/ServiceCard";

const Alltreatment = () => {
    const allservices = useLoaderData();
    const Services = allservices.services
    // console.log(Services);
    
    
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 my-6'>
                {
                    Services.map(data => <ServiceCard data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Alltreatment;