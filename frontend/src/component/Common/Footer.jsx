


// import React from 'react'
// import { Link } from "react-router-dom";
// import {TbBrandMeta} from "react-icons/tb";
// import { IoLogoInstagram } from 'react-icons/io';
// import { RiTwitterXLine } from 'react-icons/ri';
// import { FiPhoneCall } from 'react-icons/fi';

// const Footer = () => {
//   return (
//    <footer className='pt-16 bg-[#f4efe8] border-t border-[#d4c8b8]'>
    
//     <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 lg:px-0">

//         {/* Newsletter */}
//         <div>
//             <h3 className='text-xl font-semibold text-[#5a3b1e] mb-4'>Newsletter</h3>
//             <p className="text-sm text-gray-600 mb-3 leading-relaxed">
//                 Be the first to hear about new arrivals, special drops & exclusive offers.
//             </p>
//             <p className="font-medium text-sm text-[#5a3b1e] mb-6"> Sign Up & Get 10% off first order.</p>

//             <form className="flex bg-white rounded-xl overflow-hidden border border-gray-300">
//                 <input 
//                   type="email"
//                   placeholder='Email address' 
//                   className='p-3 w-full text-sm focus:outline-none' 
//                   required 
//                 />
//                 <button 
//                   type='submit' 
//                   className='bg-[#5a3b1e] text-white px-6 text-sm hover:bg-[#4c2f19] transition-all'>
//                   Subscribe
//                 </button>
//             </form>
//         </div>

        
//         {/* Shop */}
//         <div>
//             <h3 className='text-xl font-semibold text-[#5a3b1e] mb-4'>Shop</h3>
//             <ul className='space-y-2 text-gray-700'>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Men's Top Wear</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Women's Top Wear</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Men's Bottom Wear</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Women's Bottom Wear</Link></li>
//             </ul>
//         </div>

//         {/* Support */}
//         <div>
//             <h3 className='text-xl font-semibold text-[#5a3b1e] mb-4'>Support</h3>
//             <ul className='space-y-2 text-gray-700'>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Contact Us</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">About Us</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">FAQs</Link></li>
//                 <li><Link to="#" className="hover:text-[#5a3b1e] transition">Features</Link></li>
//             </ul>
//         </div>

//         {/* Social + Call */}
//         <div>
//             <h3 className='text-xl font-semibold text-[#5a3b1e] mb-4'>Follow Us</h3>
//             <div className="flex items-center space-x-4 mb-6">
//                 <a className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-[#f2eae0] transition" href="#">
//                     <TbBrandMeta className="h-5 w-5" />
//                 </a>
//                 <a className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-[#f2eae0] transition" href="#">
//                     <IoLogoInstagram className="h-5 w-5" />
//                 </a>
//                 <a className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-[#f2eae0] transition" href="#">
//                     <RiTwitterXLine className="h-4 w-4" />
//                 </a>
//             </div>

//             <p className='text-gray-500 text-sm mb-1'>Call Us</p>
//             <p className='text-[#5a3b1e] font-medium text-sm'>
//                 <FiPhoneCall className='inline-block mr-2'/> 0123-456-789
//             </p>
//         </div>
//     </div>

//     <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-[#d4c8b8] pt-6 pb-8">
//         <p className='text-gray-600 text-sm text-center tracking-tight'>  © {new Date().getFullYear()} MandalaMuse. All rights reserved.</p>
//     </div>

//    </footer>
//   )
// }

// export default Footer

import React from 'react';
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='pt-16 bg-[#5a3b1e] border-t border-[#4c2f19] relative overflow-hidden animate-fadeIn'>
      {/* Subtle Mandala Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzVhM2IxZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI5Ii8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjE1Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] bg-repeat"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 lg:px-0 relative z-10">

        {/* Newsletter */}
        <div className="animate-[slideUp_1s_ease-out_0.2s_forwards] opacity-0 transform translate-y-10">
          <h3 className='text-xl font-semibold text-white mb-4 drop-shadow-sm'>Newsletter</h3>
          <p className="text-sm text-gray-200 mb-3 leading-relaxed">
            Be the first to hear about new arrivals, special drops & exclusive offers.
          </p>
          <p className="font-medium text-sm text-white mb-6">Sign Up & Get 10% off first order.</p>

          <form className="flex bg-[#4c2f19] rounded-xl overflow-hidden border border-[#3a2413] shadow-md hover:shadow-lg transition-all duration-300">
            <input 
              type="email"
              placeholder='Email address' 
              className='p-3 w-full text-sm text-white bg-[#4c2f19] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e8c9a0] transition-all duration-300' 
              required 
            />
            <button 
              type='submit' 
              className='bg-gradient-to-r from-[#e8c9a0] to-[#d4b07c] text-[#5a3b1e] px-6 text-sm hover:from-[#d4b07c] hover:to-[#c2a26c] hover:scale-105 transition-all duration-300 shadow-md'
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop */}
        <div className="animate-[slideUp_1s_ease-out_0.4s_forwards] opacity-0 transform translate-y-10">
          <h3 className='text-xl font-semibold text-white mb-4 drop-shadow-sm'>Shop</h3>
          <ul className='space-y-2 text-gray-200'>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Men's Top Wear</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Women's Top Wear</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Men's Bottom Wear</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Women's Bottom Wear</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="animate-[slideUp_1s_ease-out_0.6s_forwards] opacity-0 transform translate-y-10">
          <h3 className='text-xl font-semibold text-white mb-4 drop-shadow-sm'>Support</h3>
          <ul className='space-y-2 text-gray-200'>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">About Us</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">FAQs</Link></li>
            <li><Link to="#" className="hover:text-[#e8c9a0] hover:translate-x-1 transition-all duration-300">Features</Link></li>
          </ul>
        </div>

        {/* Social + Call */}
        <div className="animate-[slideUp_1s_ease-out_0.8s_forwards] opacity-0 transform translate-y-10">
          <h3 className='text-xl font-semibold text-white mb-4 drop-shadow-sm'>Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a className="w-9 h-9 rounded-full bg-[#4c2f19] flex items-center justify-center shadow-md hover:bg-[#e8c9a0] hover:scale-110 hover:rotate-12 transition-all duration-300" href="#">
              <TbBrandMeta className="h-5 w-5 text-[#5a3b1e]" />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#4c2f19] flex items-center justify-center shadow-md hover:bg-[#e8c9a0] hover:scale-110 hover:rotate-12 transition-all duration-300" href="#">
              <IoLogoInstagram className="h-5 w-5 text-[#5a3b1e]" />
            </a>
            <a className="w-9 h-9 rounded-full bg-[#4c2f19] flex items-center justify-center shadow-md hover:bg-[#e8c9a0] hover:scale-110 hover:rotate-12 transition-all duration-300" href="#">
              <RiTwitterXLine className="h-4 w-4 text-[#5a3b1e]" />
            </a>
          </div>

          <p className='text-gray-300 text-sm mb-1'>Call Us</p>
          <p className='text-[#e8c9a0] font-medium text-sm hover:text-white transition-all duration-300'>
            <FiPhoneCall className='inline-block mr-2 hover:scale-110 transition-transform duration-300' /> 0123-456-789
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-[#4c2f19] pt-6 pb-8 relative z-10">
        <p className='text-gray-300 text-sm text-center tracking-tight animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0'>
          © {new Date().getFullYear()} MandalaMuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
