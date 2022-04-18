import React from 'react';
import plane from '../../images/plane.svg';
import { ArrowRightIcon, CreditCardIcon, ReceiptRefundIcon } from '@heroicons/react/solid';

const Benefits = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24'>
            <div className='bg-slate-100 p-6 m-4 text-center rounded-md'>
                <img className='w-14 mx-auto mb-2' src={plane} alt="" />
                <h3 className='text-xl'>Free Worldwide Shipping</h3>
                <p>On all orders over $7500.00</p>
                <button className='flex content-center items-center mx-auto mt-2 text-sky-700'>
                    <span>Learn More</span>
                    <ArrowRightIcon className='w-6 ml-1'></ArrowRightIcon>
                </button>
            </div>
            <div className='bg-slate-100 p-6 m-4 text-center rounded-md'>
                <CreditCardIcon className='w-14 mx-auto mb-2'></CreditCardIcon>
                <h3 className='text-xl'>100% Payment Secure</h3>
                <p>We ensure secure payment with PEV</p>
                <button className='flex content-center items-center mx-auto mt-2 text-sky-700'>
                    <span>Learn More</span>
                    <ArrowRightIcon className='w-6 ml-1'></ArrowRightIcon>
                </button>
            </div>
            <div className='bg-slate-100 p-6 m-4 text-center rounded-md'>
                {/* <img  src={plane} alt="" />s */}
                <ReceiptRefundIcon className='w-14 mx-auto mb-2'></ReceiptRefundIcon>
                <h3 className='text-xl'>30 Days Return</h3>
                <p>Return it within 20 day for an exchange</p>
                <button className='flex content-center items-center mx-auto mt-2 text-sky-700'>
                    <span>Learn More</span>
                    <ArrowRightIcon className='w-6 ml-1'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default Benefits;