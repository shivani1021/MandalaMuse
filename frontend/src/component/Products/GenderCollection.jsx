


// import React from 'react'
// import { Link } from "react-router-dom"
// import MenCollection from "../../assets/images/MenCollection.jpg"
// import WomenCollection from "../../assets/images/WomenCollection.jpg"
// import HomeDecor from  "../../assets/images/HomeDecor.jpg"

// const GenderCollection = () => {
//   return (
//     <section className='py-20'>
//       <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

//         {/* Women */}
//         <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-white w-[500px] h-[400px]">
//           <img 
//             src={WomenCollection}
//             alt="Women's Collection"
//             className='w-full h-full object-cover rounded-3xl'
//           />

//           <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-3 rounded-xl shadow-md">
//             <h2 className='text-lg font-bold text-gray-900 mb-1'>Women's Collection</h2>
//             <Link to="/collection/all?gender=Women" className="text-gray-900 underline text-sm">Shop Now</Link>
//           </div>
//         </div>

//         {/* Men */}
//         <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-white w-[500px] h-[400px]">
//           <img 
//             src={MenCollection}
//             alt="Men's Collection"
//             className='w-full h-full object-cover rounded-3xl'
//           />

//           <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-3 rounded-xl shadow-md">
//             <h2 className='text-lg font-bold text-gray-900 mb-1'>Men's Collection</h2>
//             <Link to="/collection/all?gender=Men" className="text-gray-900 underline text-sm">Shop Now</Link>
//           </div>
//         </div>

//         {/* Home Decor */}
//         <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-white w-[500px] h-[400px]">
//           <img 
//             src={HomeDecor}
//             alt="Home Decor Collection"
//             className='w-full h-full object-cover rounded-3xl'
//           />

//           <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 p-3 rounded-xl shadow-md">
//             <h2 className='text-lg font-bold text-gray-900 mb-1'>Home Decor</h2>
//             <Link to="/collection/all?gHome Decor" className="text-gray-900 underline text-sm">Shop Now</Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default GenderCollection  
import React from "react";
import { Link } from "react-router-dom";
import MenCollection from "../../assets/images/MenCollection.jpg";
import WomenCollection from "../../assets/images/WomenCollection.jpg";
import HomeDecor from "../../assets/images/HomeDecor.jpg";

const GenderCollection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Women */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl 
                        bg-white w-[420px] h-[340px]
                        hover:scale-[1.03] transition-all duration-500 
                        animate-fadeUP group">
          <img
            src={WomenCollection}
            alt="Women's Collection"
            className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute bottom-5 left-5 bg-white/85 backdrop-blur-md 
                          p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">Women's Collection</h2>
            <Link
              to="/collection/all?gender=Women"
              className="text-gray-900 underline text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl 
                        bg-white w-[420px] h-[340px]
                        hover:scale-[1.03] transition-all duration-500 
                        animate-fadeUP group"
             style={{ animationDelay: "0.15s" }}>
          <img
            src={MenCollection}
            alt="Men's Collection"
            className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute bottom-5 left-5 bg-white/85 backdrop-blur-md 
                          p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">Men's Collection</h2>
            <Link
              to="/collection/all?gender=Men"
              className="text-gray-900 underline text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Home Decor */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl 
                        bg-white w-[420px] h-[340px]
                        hover:scale-[1.03] transition-all duration-500 
                        animate-fadeUP group"
             style={{ animationDelay: "0.30s" }}>
          <img
            src={HomeDecor}
            alt="Home Decor Collection"
            className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute bottom-5 left-5 bg-white/85 backdrop-blur-md 
                          p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">Home Decor</h2>
            <Link
              to="/collection/all?category=Home+Decor"
              className="text-gray-900 underline text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeUP {
            animation: fadeUP .8s ease forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          @keyframes fadeUP {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default GenderCollection;

