
// import React from 'react'
// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io";
// import { RiTwitterXLine } from "react-icons/ri";

// const Topbar = () => {
//   return (
//     <div className="bg-amber-900 text-amber-50 tracking-tight border-b border-amber-800">
//       <div className="container mx-auto flex justify-between items-center py-2 px-4">

//         {/* Social icons */}
//         <div className="hidden md:flex items-center space-x-4 opacity-90">
//           <a href="#" className="hover:opacity-60 transition"><TbBrandMeta className='h-5 w-5' /></a>
//           <a href="#" className="hover:opacity-60 transition"><IoLogoInstagram className='h-5 w-5' /></a>
//           <a href="#" className="hover:opacity-60 transition"><RiTwitterXLine className='h-4 w-4' /></a>
//         </div>

//         {/* Text */}
//         <div className="text-[13px] md:text-sm text-center flex-grow px-3">
//           <span>🪷  Bringing Mandala Art to homes around the world!</span>
//         </div>

//         {/* contact */}
//         <div className="hidden md:block text-[13px] opacity-90">
//           <a href="tel:+1234567890" className='hover:opacity-60 transition'>+1 (234) 567-890</a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Topbar;



import React from 'react';
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 tracking-tight border-b border-amber-700 shadow-md animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">

        {/* Social icons */}
        <div className="hidden md:flex items-center space-x-4 opacity-90">
          <a 
            href="#" 
            className="hover:opacity-100 hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12"
          >
            <TbBrandMeta className='h-5 w-5' />
          </a>
          <a 
            href="#" 
            className="hover:opacity-100 hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12"
          >
            <IoLogoInstagram className='h-5 w-5' />
          </a>
          <a 
            href="#" 
            className="hover:opacity-100 hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12"
          >
            <RiTwitterXLine className='h-4 w-4' />
          </a>
        </div>

        {/* Text */}
        <div className="text-[13px] md:text-sm text-center flex-grow px-3 font-medium">
          <span className="animate-pulse drop-shadow-lg">
            🪷 Bringing Mandala Art to homes around the world!
          </span>
        </div>

        {/* Contact */}
        <div className="hidden md:block text-[13px] opacity-90 font-medium">
          <a 
            href="tel:+1234567890" 
            className='hover:opacity-100 hover:text-amber-200 hover:underline transition-all duration-300'
          >
            +1 (234) 567-890
          </a>
        </div>

      </div>
    </div>
  );
};

export default Topbar;

