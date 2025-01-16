import React, {useContext, useState} from 'react'

import {assets} from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/shopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
<Link to="/"><img src={assets.logo} alt="" className='w-36' /></Link>

{/* NAV LINKS */}
<ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
  <NavLink to="/" className="flex flex-col items-center gap-1">
    <li>HOME</li> 
    {/* NAV LINK UNDERLINE */}
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
  <NavLink to="/about" className="flex flex-col items-center gap-1">
    <li>ABOUT</li>
        {/* NAV LINK UNDERLINE */}
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
  <NavLink to="/collection" className="flex flex-col items-center gap-1">
    <li>COLLECTIONS</li>
        {/* NAV LINK UNDERLINE */}
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
  <NavLink to="/contact" className="flex flex-col items-center gap-1">
    <li>CONTACT</li>
        {/* NAV LINK UNDERLINE */}
    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
</ul>
<div className='flex items-center gap-6'>
  <img src={assets.search_icon} alt="" className='w-5 cursor-pointer'  onClick={
        ()=>setShowSearch(true)
      } />

  {/* DROP DOWN START */}
  <div className='group relative'>
    <Link to='/Login'><img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' /> </Link>
    
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
<div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
<p className='cursor-pointer hover:text-black'>My Profile</p>
<p className='cursor-pointer hover:text-black'> Orders</p>
<p className='cursor-pointer hover:text-black'>Logout</p>
</div>
    </div>
    </div>
    {/* DROP DOWN ENDS */}


    {/* CART STARTS */}
   <Link to="/cart" className='relative'>
   <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
   <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
   </Link>
   {/* CART ENDS */}
   <img src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' onClick={()=>setVisible(true)}/>

</div>

{/* SIDE BAR MENU */}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

  <div className='flex flex-col text-gray-600'>
<div className='flex items-center gap-4 p-3 ' onClick={()=>setVisible(false)}>
<img src={assets.dropdown_icon} alt="" className='h-4 rotate-180 cursor-pointer' />
<p className='cursor-pointer'>Back</p>
</div>
<NavLink to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>Home</NavLink>
<NavLink to='/about' className='py-2 pl-6 border'  onClick={()=>setVisible(false)}>About</NavLink>
<NavLink to='/collections' className='py-2 pl-6 border'  onClick={()=>setVisible(false)}>Collections</NavLink>
<NavLink to='/contact' className='py-2 pl-6 border'  onClick={()=>setVisible(false)}>Contact</NavLink>
  </div>

</div>

    </div>
  )
}

export default Navbar
