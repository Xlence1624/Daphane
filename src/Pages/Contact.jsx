import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../Components/NewLetterBox'
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t ">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="flex my-10 flex-col justify-center md:flex-row gap-10 mb-28">

        <img src={assets.contact_img} alt="" className=''/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>60 Nothungham crescent</p>
          <p className='text-gray-500'>Tel: 8050377464 <br /> Email: admin@fhindahane.com</p>
          <p className='font-semibold text-xl text-gray-600'>Career at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewLetterBox/>
    </div>
  )
}

export default Contact
