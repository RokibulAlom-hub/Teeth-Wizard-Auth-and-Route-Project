import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const singleData = useLoaderData()
    const data = singleData.singleData;
    console.log(data);
    
    const {  image, description, name } = data;
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5">
                          {description}
                        </p>
                        <button className="btn btn-primary">Book Appoinment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;