import React from 'react';
import Service from '../Service/Service';
import useProduct from '../useProduct';

const Services = () => {
    const services = useProduct([]);
    return (
        <div className='p-5'>
            <h3 className='text-3xl text-center mb-4'>Services</h3>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 items-center'>
                {
                    services.map(product => <Service
                        key={product.id}
                        product={product}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;