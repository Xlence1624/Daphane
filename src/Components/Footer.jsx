import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   <div>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div className='px-0'>
        <img src={assets.logo}className='mb-[10px] w-12' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam animi repellat expedita, aperiam sequi dolor nam corporis nostrum debitis?</p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
          
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
<li>+12993759068</li>
<li>Fhindahhd@gmail.com</li>
        </ul>
      </div>

      
    </div>
    <div className='my-0 mx-auto'>
        <hr />
        <p className='py-5 text-[18px] text-center text-gray-600'> Copyright 2024 @ Orji Michael - All Right Reserved</p>
      </div>
   </div>
  )
}

export default Footer
