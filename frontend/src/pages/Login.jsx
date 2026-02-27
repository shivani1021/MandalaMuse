// import {useState} from 'react'
// import { Link } from 'react-router-dom';
// import login from "../assets/images/login.jpg"

// const Login = () => {
//     const [email, setEmail] =useState("");
//     const [password, setPassword] =useState("");

//   return (
//     <div className='flex'>
//      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
//      <form className="w-full max-w-md bd-white p-8 rounded-lg border shadow-sm">
//         <div className="flex justify-center mb-6">
//             <h2 className="text-xl font-medium">
//           MandalaMuse
//             </h2>
//         </div>
//         <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋🏻 </h2>
//         <p className="text-center mb-6">
//             Enter your username and password to login
//         </p>
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//                 Email 
//             </label>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Enter your email address"
//             />

//         </div>
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//                 Password
//             </label>
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Enter your password"
//             />
//         </div>
//         <button
//             type="submit"
//             className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
//         >
//             Sign In
//         </button>
//         <p className="text-sm text-center mt-4 text-gray-600">
//             Don't have an account? 
//             <Link to="/register" className="text-blue-500 ">
//               Register 
//             </Link>

//         </p>
//      </form>
//      </div>

//         <div className="hidden md:block md:w-1/2 bg-gray-800">
//         <div className="h-full flex-col justify-center items-center">
//             <img
//             src={login}
//             alt="Login to Account"
//             className="h-[750px] w-full object-cover rounded-l-lg"
//             />
//             </div>
//             </div>

//     </div>
//   )
// }

// export default Login



import { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import loginVideo from "../assets/videos/login.mp4";
import  {loginUser} from "../redux/slices/authSlice"
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId} = useSelector((state) => state.auth);
  const {cart} = useSelector((state) => state.cart);

  // Get redirect parameter and Check if it's checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");


  useEffect (() =>{
    if(user){
      if(cart?.products.length> 0 && guestId){
        dispatch(mergeCart({guestId, user})).then(() =>{
          navigate(isCheckoutRedirect ? "/checkout": "/");
        });

      }else{
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  },[user,guestId,cart, navigate,isCheckoutRedirect, dispatch]);

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Attempting Login With:", { email, password }); // <-- CHECK THIS OUTPUT
  if (!email || !password) {
      // Add simple client-side validation/alert here
      alert("Please enter both email and password.");
      return; // Stop the dispatch if fields are empty
  }
  dispatch(loginUser({email, password}));
};
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
            Sign In
          </button>

          <p className="text-xs md:text-sm text-center mt-5 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={`/register?redirect = ${encodeURIComponent(redirect)}`}
              className="text-amber-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Video Section */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <video
            src={loginVideo}
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

export default Login;
