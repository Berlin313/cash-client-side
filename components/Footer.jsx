import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {SiTrustpilot} from 'react-icons/si';
const Footer = () => {
  return (
    <div className=' w-full flex flex-col justify-center items-center text-center'>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-3xl pb-6'>
                    <strong className='font-bold'>CASH</strong><span className='text-yellow-600'>syria</span>
                </p>
                <div className='flex gap-6 pb-5'>
                <BsFacebook className='text-2xl cursor-pointer hover:text-blue-500' />
                <BsTelegram className='text-2xl cursor-pointer hover:text-blue-700' />
                <SiTrustpilot className='text-2xl cursor-pointer hover:text-green-700' />
                </div>
            </ul>
        </div>
        <h1 className='text-gray-800'>2020-2023 All rights resrved cashsyria</h1>
    </div>
  )
}

export default Footer