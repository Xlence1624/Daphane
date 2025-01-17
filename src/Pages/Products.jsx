import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Products = () => {
  const {productId} = useParams();
const {products, currency, addToCart} = useContext(ShopContext);
const [productData, setProductData] = useState(false);
const [image , setImage] = useState('')
const [size, setSize] =useState('')

const fetchProductData = async () => {
products.map(
  (item) => {
if (item._id === productId){
  setProductData(item)
  setImage(item.image[0])

  return null;
}
  }
)
}

useEffect(
  () => {
fetchProductData()
  }, [productId, products]
)
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Products data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
{/* Product images */}
<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-beween sm:justify-normal sm:w-[18.7%] w-full'> 
{
productData.image.map(
  (item, index)=>(
    <img src={item} alt="" key={index} onClick={() => setImage(item)}className='w-[14%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
  )
)}
</div>
<div className='w-full sm:w-[80%]'>
<img src={image} alt=""  className='w-full h-auto'/>
</div>

</div>

{/* Product info */
}
<div className='flex-1 '>
<h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
<div className='flex items-center gap-1 mt-2'>
<img src={assets.star_icon} alt="" className="w-3 5" />
<img src={assets.star_icon} alt="" className="w-3 5" />
<img src={assets.star_icon} alt="" className="w-3 5" />
<img src={assets.star_icon} alt="" className="w-3 5" />
<img src={assets.star_icon} alt="" className="w-3 5" />
<p className='pl-2'>(122)</p>
</div>
<p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
<p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
<div className='flex flex-col gap-4 my-8'>
<p>select size</p>
<div className='flex gap-2'>
{productData.sizes.map(
  (item, index) => ( 
    <button key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`} onClick={
      () => setSize(item)
    }>{item}</button>
  )
)}
</div>
</div>
<button className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700' onClick={
  () => addToCart(productData._id,size)
}>ADD TO CART</button>
<hr  className='mt-8 sm:w-4/5'/>
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
<p>100% Original product</p>
<p>Cash on delivery is available on this product.</p>
<p>Easy return and exchange policy within 7 days</p>
</div>
</div>
      </div>
{/* Description and review section */}
<div className='mt-20'>
<div className='flex'>
<p className='border px-5 py-3 text-sm'>Description</p>
<p className='border px-5 py-3 text-sm'>Reviews</p>
<p className='border px-5 py-3 text-sm'>122</p>
</div>

<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 '>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam impedit id vel nobis voluptatem tempore sapiente. Incidunt, quis enim.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam impedit id vel nobis voluptatem tempore sapiente. Incidunt, quis enim.</p>
</div>
</div>

{/* Display related products */}
<RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : 
  <div className='opacity-0'>

  </div>
}

export default Products
