// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { Link } from "react-router-dom";

// import img1 from "../../assets/images/mandalamirror.jpg"
// import img2 from "../../assets/images/ToteBag.jpg"
// import img3 from "../../assets/images/coffeeMug.jpg"
// import img4 from "../../assets/images/wallframe.jpg"
// import img5 from "../../assets/images/MandalaHoodie.jpg"
// import img6 from "../../assets/images/phoneCase.jpg"
// import img7 from "../../assets/images/wallClock.jpg"

// const sliderData = [
//   { title:"Mandala Mirror", price:"₹699", url:img1, id:1 },
//   { title:"Mandala Tote Bag", price:"₹499", url:img2, id:2 },
//   { title:"Mandala Coffee Mug", price:"₹399", url:img3, id:3 },
//   { title:"Mandala Wall Frame", price:"₹899", url:img4, id:4 },
//   { title:"Mandala Hoodie Oversize", price:"₹1299", url:img5, id:5 },
//   { title:"Mandala Phone Case", price:"₹349", url:img6, id:6 },
//   { title:"Mandala Wall Clock", price:"₹849", url:img7, id:7 },
// ];

// const NewArrivals = () => {
//   return (
//     <section className="py-20 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

//         {/* LEFT TEXT CONTENT */}
//         <div className="md:w-1/3 space-y-6">
//           <span className="uppercase tracking-widest text-pink-600 text-sm">Discover</span>
//           <h2 className="text-4xl font-bold">Mandala New Arrivals</h2>
//           <p className="text-gray-600 text-lg">
//             Explore spiritual art hand-crafted with love, harmony & cosmic balance.
//           </p>

//           <a href="#" className="bg-black text-white py-2 px-5 rounded-full inline-block hover:bg-gray-800 transition">
//             Shop Now
//           </a>
//         </div>

//         {/* RIGHT SLIDER */}
//         <div className="md:w-2/3 w-full">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={18}
//             loop={true}
//             autoplay={{ delay: 1800 }}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               480: { slidesPerView: 1.5 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {sliderData.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <Link to={`/product/${product.id}`}>
//                   <div className="rounded-3xl overflow-hidden shadow-lg bg-white group relative cursor-pointer">

//                     {/* IMAGE */}
//                     <img src={product.url} alt={product.title} className="w-full h-[300px] object-cover rounded-3xl" />

//                     {/* GLASS TEXT OVERLAY BOTTOM INSIDE CARD */}
//                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-b-3xl flex justify-between items-center">
//                       <div>
//                         <h3 className="text-white text-lg font-semibold">{product.title}</h3>
//                         <p className="text-white text-sm">{product.price}</p>
//                       </div>
//                     </div>

//                     {/* HOVER OVERLAY FULL CARD */}
//                     <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                       <span className="text-white text-lg font-semibold underline">
//                         View Product
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );

        console.log("New arrivals data:", response.data); 
         console.log(JSON.stringify(response.data[0], null, 2));  // << ADD THIS // 👈 CHECK THIS
        setNewArrivals(response.data);
        setLoading(false);
      } catch (error) {
        console.error( error);
      }  finally {
      setLoading(false);
      }
      
    };

    fetchNewArrivals();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* LEFT TEXT SECTION */}
        <div className="md:w-1/3 space-y-6">
          <span className="uppercase tracking-widest text-pink-600 text-sm">
            Discover
          </span>
          <h2 className="text-4xl font-bold">Mandala New Arrivals</h2>
          <p className="text-gray-600 text-lg">
            Explore spiritual art hand-crafted with love, harmony & cosmic balance.
          </p>

          <a
            href="#"
            className="bg-black text-white py-2 px-5 rounded-full inline-block hover:bg-gray-800 transition"
          >
            Shop Now
          </a>
        </div>

        {/* RIGHT SLIDER */}
        <div className="md:w-2/3 w-full">
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : newArrivals.length === 0 ? (
            <p>No new arrivals available.</p>
          ) : (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={18}
              loop={true}
              autoplay={{ delay: 1800 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 1.5 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {newArrivals.map((product) => (
                <SwiperSlide key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <div className="rounded-3xl overflow-hidden shadow-lg bg-white group relative cursor-pointer">

                      {/* IMAGE */}
                      <img
                        src={product.images?.[0]?.url || ""}
                        alt={product.images?.[0]?.altText || product.name}
                        className="w-full h-[300px] object-cover rounded-3xl"
                      />

                      {/* BOTTOM GLASS OVERLAY */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-b-3xl flex justify-between items-center">
                        <div>
                          <h3 className="text-white text-lg font-semibold">
                            {product.name}
                          </h3>
                          <p className="text-white text-sm">
                            ₹{product.price}
                          </p>
                        </div>
                      </div>

                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <span className="text-white text-lg font-semibold underline">
                          View Product
                        </span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;




