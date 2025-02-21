import React from 'react'

const NewLetterBox = () => {

  const onSubmitHandler = (event) =>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet elit.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-2 justify-between mx-auto my-6 border pl-3'>
<input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none'  required/>
<button type='submit' className='bg-black text-white px-5\[19px] py-[6px] text-sm sm:text-xs sm:px-1 sm:py-4'>
SUBSCRIBE
</button>
      </form>
    </div>
  )
}

export default NewLetterBox
