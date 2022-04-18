import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../useProduct';

const CheckOut = () => {
    const { id } = useParams();
    const products = useProduct([]);
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const product = products.find(product => product.id === parseInt(id));
        setProduct(product);

    }, [products])

    const handleBuyNowProduct = () => {
        navigate('/buynow')
    }

    const { title, img, price, body } = product;

    return (
        <div className='bg-slate-100 p-4 max-w-[550px] mx-auto my-9 rounded-md'>
            <img className='min-w-full rounded-xl' src={img} alt="" />

            <h2 className='text-2xl mt-2'>{title}</h2>
            <p className='text-xl my-2'>Price: ${price}</p>
            <p>{body}</p>
            <button className='see-details-button' onClick={handleBuyNowProduct}>
                <span>Buy Now</span>
                <ArrowRightIcon className='icon'></ArrowRightIcon>
            </button>

        </div>
    );
};

export default CheckOut;