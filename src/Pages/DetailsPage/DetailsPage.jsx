import { useLoaderData } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";


const DetailsPage = () => {
    const {singleData} = useLoaderData();
    console.log(singleData);
    
    const { description, name, id, priceRange,image } = singleData;
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:`url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className="mb-5">
                           {description}
                        </p>
                        <h2 className="text-xl mb-5">Price:<span className="text-red-400 font-bold">{priceRange}</span></h2>
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Get Started</button>
                    </div>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default DetailsPage;