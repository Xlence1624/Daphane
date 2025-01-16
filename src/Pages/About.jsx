import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../Components/NewLetterBox'


const About = () => {
  return (
   <div>
     <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/> </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">


      <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolore corrupti autem id vero nemo quos aperiam perspiciatis eius?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe dolore quae quidem alias debitis, quibusdam nisi amet facilis voluptas! Vitae et aperiam quo quisquam?</p>
      <b className='text-gray-800'>Our vision</b>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas animi asperiores cum placeat? Reiciendis dolore voluptatibus cupiditate. Doloribus eius eligendi maxime aperiam asperiores voluptate fugiat, necessitatibus architecto quam dicta perferendis.</p>
      </div>


      </div>
     
    <div className="text-4xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
<div className="border px-10 md:px16 py-8 sm:py-20 fle flex-col gap-5"><b>Quality Assurance:
  </b>
  <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent standards. </p>
  </div>
  <div className="border px-10 md:px16 py-8 sm:py-20 fle flex-col gap-5"><b>Convenience:
  </b>
  <p className='text-gray-600'>With our user-friendly interface and hassle free ordering process, shopping is made easy. </p>
  </div>
  <div className="border px-10 md:px16 py-8 sm:py-20 fle flex-col gap-5"><b>Exceptional customer service:
  </b>
  <p className='text-gray-600'>Our team of dedicated proffesionals is here to assit you the way,ensuring a seamless shopping experience. </p>
  </div>
    </div>
<NewLetterBox/>
   </div>
  )
}

export default About
