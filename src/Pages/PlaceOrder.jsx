import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const PlaceOrder = () => {
const [method, setMethod] = useState('');


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* LEft side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
<Title text1={'DEELIVERY'} text2={'INFORMATION'}/>
        </div>
<div className="flex gap-3" >
  <input type="text" placeholder='First name ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
  <input type="text" placeholder='Last name ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
</div>
<input type="email" placeholder='Email address ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
<input type="text" placeholder='Street ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
<div className="flex gap-3" >
  <input type="text" placeholder='City ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
  <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
</div>

<div className="flex gap-3" >
  <input type="number" placeholder='zip code ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
  <input type="text" placeholder='Country ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
</div>
<input type="number" placeholder='Phone number ' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/* right side */}
      <div className="mt-8">
<div className="mt-8 min-w-80">

  <CartTotal/>
</div>
<div className="mt-12">
  <Title text1={'PAYMENT'} text2={'METHOD'}/>

  {/* Payment method selection*/}
  <div className='flex gap-3 flex-col lg:flex-row'>
<div onClick={
  () => setMethod('stripe')
} className='flex items-center gap-2 border py-2 px-5 cursor-pointer'>
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400': ""}`}></p>
<img src={assets.stripe_logo} alt="" className='h-5 mr-6'/>
</div>

<div onClick={
  () => setMethod('razorpay')
} className='flex items-center gap-2 border px-5 py-2 cursor-pointer'>
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400': ""}`}></p>
<img src={assets.razorpay_logo} alt="" className='h-5 mr-10 '/>
</div>

<div onClick={
  () => setMethod('cod')
} className="flex items-center gap-2 border py-2 px-5  cursor-pointer">
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400': ""}`}></p>
<p className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</p>
</div>
  </div>

  <div className="w-full text-end mt-8">
    <Link to='/order'>
    <button className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
    </Link>

  </div>
</div>

      </div>
    </div>
  )
}

export default PlaceOrder
