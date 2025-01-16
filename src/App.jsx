import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'; // Import About component
import Contact from './Pages/Contact'; // Import Contact component
import Collection from './Pages/Collection'; // Import Collection component
import Order from './Pages/Order'; // Import Order component
import Login from './Pages/Login'; // Import Login component
import Cart from './Pages/Cart'; // Import Cart component
import Products from './Pages/Products'; // Import Products component
import PlaceOrder from './Pages/PlaceOrder'; // Import PlaceOrder component
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/placeorder" element={<PlaceOrder />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;