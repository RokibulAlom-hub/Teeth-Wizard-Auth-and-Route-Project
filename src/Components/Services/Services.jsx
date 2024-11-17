import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = ({allservice}) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                allservice.slice(0,4).map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
            }
        </div>
    );
};

export default Services;