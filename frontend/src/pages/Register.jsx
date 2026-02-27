// import { useState } from "react";
// import { Link } from "react-router-dom";
// import registerVideo from "../assets/videos/register.mp4";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="flex h-[85vh] items-center justify-center bg-gradient-to-r from-amber-50 via-white to-amber-50">
//       {/* Left Form Section */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
//         <form className="w-full max-w-md bg-white p-10 rounded-2xl border border-gray-200 shadow-xl backdrop-blur-sm">
//           <div className="flex justify-center mb-6">
//             <h2 className="text-2xl font-bold tracking-wide text-gray-800">
//               MandalaMuse
//             </h2>
//           </div>

//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//             Hey there! 👋🏻
//           </h2>
//           <p className="text-center mb-8 text-gray-600">
//             Enter your email and password to continue your Mandala journey.
//           </p>

//           <div className="mb-5">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//              Name
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
//               placeholder="Enter your Name"
//             />
//           </div>



//           {/* Email Input */}
//           <div className="mb-5">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
//               placeholder="Enter your email address"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-8">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all shadow-md"
//           >
//             Sign up
//           </button>

//           <p className="text-sm text-center mt-6 text-gray-600">
//             Don’t have an account?{" "}
//             <Link
//               to="/login"
//               className="text-amber-600 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Right Video Section */}
//       <div className="hidden md:flex md:w-1/2 justify-center items-center px-8">
//         <div className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
//           <video
//             src={registerVideo}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-3xl"
//           />
//           <div className="absolute inset-0 bg-black/30 rounded-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useEffect ,useState } from "react";
import { Link , useLocation, useNavigate } from "react-router-dom";
import registerVideo from "../assets/videos/register.mp4";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch,useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId} = useSelector((state) => state.auth);
    const {cart} = useSelector((state) => state.cart);
  
    // Get redirect parameter and Check if it's checkout or something
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");
  
  
    useEffect(() =>{
      if(user){
        if(cart?.products.length> 0 && guestId){
          dispatch(mergeCart({guestId})).then(() =>{
            navigate(isCheckoutRedirect ? "/checkout": "/");
          });
  
        }else{
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        }
      }
    },[user,guestId,cart, navigate,isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({name, email, password}))
    };

;


  return (
    <div className="flex flex-col md:flex-row h-auto min-h-[85vh] items-center justify-center bg-gradient-to-r from-amber-50 via-white to-amber-50 px-4 md:px-12 py-8 md:py-0">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
        <form onSubmit={handleSubmit} className="w-full max-w-sm md:max-w-md bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl backdrop-blur-sm">
          <div className="flex justify-center mb-4">
            <h2 className="text-2xl font-bold tracking-wide text-gray-800">
              MandalaMuse
            </h2>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
            Hey there! 👋🏻
          </h2>
          <p className="text-center mb-6 text-gray-600 text-sm md:text-base">
            Enter your email and password to continue your Mandala journey.
          </p>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 md:p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all text-sm md:text-base"
              placeholder="Enter your Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 md:p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all text-sm md:text-base"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 md:p-3 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all text-sm md:text-base"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 md:py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-800 transition-all shadow-md"
          >
            Sign up
          </button>

          <p className="text-xs md:text-sm text-center mt-5 text-gray-600">
            Already have an account?{" "}
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-amber-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Video Section */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <video
            src={registerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Register;
