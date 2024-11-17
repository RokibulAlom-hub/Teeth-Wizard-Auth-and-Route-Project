import { Link } from "react-router-dom";


const ServiceCard = ({ data }) => {
    const { name, description, image, priceRange } = data;

    return (
        <div>
            <div className="card p-0 shadow-xl">
                <figure className="">
                    <img 
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-2">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="btn">Price:{priceRange}</div>
                    <p >{description}</p>
                    <div className="card-actions justify-end">
                        <Link className="p-1 bg-red-500 text-white rounded-md">Know more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;