

// import React from 'react'
// import { Link } from "react-router-dom"
// import hero from "../../assets/images/hero.jpg"

// const Hero = () => {
//   return (
//     <section className="relative">
//     <img 
//   src={hero} 
//   alt="MandalaArt"
//   className="w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[550px] object-cover object-center" />



//       {/* TEXT in yellow zone */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="
//  absolute left-[60%] -translate-x-1/2 
//  max-w-sm text-amber-900 text-center
// ">

//          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase mb-4 leading-tight">
//   Mandala Muse
// </h1>

// <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-6 leading-snug max-w-[380px] mx-auto">
//   Handcrafted mandala inspired clothing & lifestyle art for everyday calm.
// </p>

// <Link
//   to="/register"
//   className="inline-block bg-white text-gray-950 px-5 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-xl transition"
// >
//   Shop Now
// </Link>

//         </div>
//       </div>

//     </section>
//   )
// }

// export default Hero


import React from 'react';
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[240px] sm:h-[300px] md:h-[420px] lg:h-[550px]">
      
      {/* Background Image with Fade & Scale Animation */}
      <img 
        src={hero} 
        alt="MandalaArt"
        className="w-full h-full object-cover object-center transform opacity-0 scale-95 animate-[fadeInScale_1s_ease-out_0.3s_forwards] transition-transform duration-700 ease-out hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>

      {/* Centered Text Box */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-2xl border border-white/20 text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase mb-4 leading-tight text-amber-100 drop-shadow-lg animate-[slideUp_1s_ease-out_0.5s_forwards] opacity-0">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Mandala Muse
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-6 leading-snug max-w-[400px] mx-auto text-amber-50 drop-shadow-md animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0">
            Handcrafted mandala-inspired clothing & lifestyle art for everyday calm.
          </p>

          {/* Button */}
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-950 px-5 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-[slideUp_1s_ease-out_1.1s_forwards] opacity-0"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Tailwind Keyframes for Image Animation */}
      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
