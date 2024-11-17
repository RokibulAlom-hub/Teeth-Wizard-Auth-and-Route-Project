import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../../Components/Services/Services';
import Feedback from '../../Components/Feedback/Feedback';

const Home = () => {
    const {service} = useLoaderData();
    const services = service.services;
    const{feedbacks} = useLoaderData();
    const feedData = feedbacks.reviews;
    console.log(feedData);
    
    return (
        <div>
            <Banner/>
            <Services allservice={services}></Services>
            <button className='bg-green-400 mx-auto block my-4 p-3 rounded-md'>
                <Link to="/alltreatment">Show more</Link></button>

             <Feedback feedData={feedData}></Feedback>   

        </div>
    );
};

export default Home;