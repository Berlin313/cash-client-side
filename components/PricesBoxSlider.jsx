"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const PricesBoxSlider = () => {

    const [prices,  setPrices] = useState([]);

    useEffect(() => {
     fetch('/api/prices')
     .then((res) => res.json())
     .then((data) => {
        setPrices(data);
     });
    
    }, [])
    

  return (
    <div className='flex flex-weap items-center justify-center m-8 my-8'>
        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-stone-200 rounded-lg max-w-xs shadow-lg'>
            <svg className='absolute bottom-0 left-0 mb-8' viewBox='0 0 375 283' fill='none'>
                <rect x="159.52" y="175" width="152" rx="8" transform='rotate(-45 159.52 175)' fill='#757575'>
                </rect>
                <rect y="107.48" width="152" height="152" rx="8" transform='rotate(-45 0 107.48)' fill='#757575'>
                </rect>
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'>
                </div>
                <Image 
                    src="/assets/images/tether-usdt-logo.svg"
                    alt='usdt logo'
                    width={120}
                    height={100}
                />
            </div>
            {prices?.map((priced) => {
                <li>
                    <h2>{priced.name}</h2>
                    <h3>{priced.price}</h3>
                </li>
            })}
        </div>
    </div>
  )
}

export default PricesBoxSlider