// import React from 'react'
// import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

// const FeaturesSection = () => {
//   return (
//   <section className='py-16 px-4 bg-white'>
//     <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>

//         {/* Feature 1 */}
//         <div className='flex flex-col items-center space-y-4'>
//             <div className="p-4 rounded-full mb-4">
//                 <HiShoppingBag className='text-xl'/>

//             </div>
//             <h4 className='tracking-tighter mb-2'>FREE SHIPPPING</h4>
//             <p className='text-sm text-gray-600 tracking-tighter'>On all orders over ₹ 1000  </p>
//         </div>

//         {/* Feature 2 */}
//         <div className='flex flex-col items-center space-y-4'>
//             <div className="p-4 rounded-full mb-4">
//                 <HiArrowPathRoundedSquare className='text-xl'/>

//             </div>
//             <h4 className='tracking-tighter mb-2'>10 DAYS RETURN</h4>
//             <p className='text-sm text-gray-600 tracking-tighter'>Money back guarantee </p>
//         </div>
//         {/* Feature 3 */}
//         <div className='flex flex-col items-center space-y-4'>
//             <div className="p-4 rounded-full mb-4">
//                 <HiOutlineCreditCard className='text-xl'/>

//             </div>
//             <h4 className='tracking-tighter mb-2'>SECURE CHECKOUT</h4>
//             <p className='text-sm text-gray-600 tracking-tighter'>100% secured checkout process  </p>
//         </div>
//         </div>
//   </section>
//   )
// }

// export default FeaturesSection


import React from 'react';
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f8f3ed]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="p-5 bg-amber-100 text-amber-700 rounded-full mb-4 shadow-inner">
            <HiShoppingBag className="text-3xl" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-2 text-gray-900">FREE SHIPPING</h4>
          <p className="text-sm text-gray-600 leading-relaxed">On all orders over ₹1000</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="p-5 bg-amber-100 text-amber-700 rounded-full mb-4 shadow-inner">
            <HiArrowPathRoundedSquare className="text-3xl" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-2 text-gray-900">10 DAYS RETURN</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Money-back guarantee</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="p-5 bg-amber-100 text-amber-700 rounded-full mb-4 shadow-inner">
            <HiOutlineCreditCard className="text-3xl" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight mb-2 text-gray-900">SECURE CHECKOUT</h4>
          <p className="text-sm text-gray-600 leading-relaxed">100% secured checkout process</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
