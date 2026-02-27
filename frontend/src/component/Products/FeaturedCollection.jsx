// import {Link} from 'react-router-dom';
// import featured from '../../assets/images/featured-mandala.jpg';


// const FeaturedCollection = () => {
//     return (
//         <section className="py-16 px-4 lg:px-0">
//             <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 p-8 shadow-lg 
// rounded-3x1">
//                 {/* Left Content */}
//                 <div className="lg:w-1/2 p-8 text-center lg:text-left">
//                     <h2 className="text-lg font-semibold Otext-gray-700 mb-2">
//                       Effortless Comfort, Timeless Style
//                     </h2>
//                     <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                         Thoughtfully designed Mandala wear that feels as good as it looks.
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-6">Immerse yourself in the soulful beauty of Mandala art. Each piece in our featured collection is a harmony of intricate patterns and mindful creativity — crafted to bring balance, peace, and style to your space.</p>

//                     <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover::bg-gray-800">Shop Now</Link> 
//                 </div>

//                 {/* Right Image */}
//                 <div className="lg:w-1/2 ">
//                     <img 
//                     src={featured} 
//                     alt="Featured Mandala Collection" 
//                     className="w-full h-auto object-cover rounded-3xl shadow-lg"
//                     />
//                 </div>
                
//             </div>
//         </section>


//   )
// }

// export default FeaturedCollection


import { Link } from 'react-router-dom';
import featured from '../../assets/images/featured-mandala.jpg';

const FeaturedCollection = () => {
  return (
    <section className="py-10 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-[#f8f3ed] shadow-lg rounded-3xl overflow-hidden">
        
        {/* Image First on Mobile */}
        <div className="w-full h-72 sm:h-80 lg:w-1/2 lg:h-[500px]">
          <img
            src={featured}
            alt="Featured Mandala Collection"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Left Content (appears below on mobile) */}
        <div className="lg:w-1/2 p-6 lg:p-10 text-center lg:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
            Effortless Comfort, Timeless Style
          </h2>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 leading-snug text-gray-900">
            Thoughtfully designed Mandala wear that feels as good as it looks.
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Immerse yourself in the soulful beauty of Mandala art. Each piece in our featured collection is a harmony of intricate patterns and mindful creativity — crafted to bring balance, peace, and style to your space.
          </p>

          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-2.5 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
