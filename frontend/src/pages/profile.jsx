// import React from 'react'
// import MyOrdersPage from './MyOrdersPage'

// const profile = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//    <div className="flex-grow container mx-auto p-4 md:p-6">
//     <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 ">
//         {/* Left Section */}
//         <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
//         <h1 className="text-2xl md:text-3xl font-bold mb-4">John doe</h1>
//         <p className="text-lg text-gray-600 mb-4">John@example.com</p>
//         <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>Logout</button>
//         </div>

//         {/* Right Section: Orders table */}
//         <div className="w-full md:w-2/3 lg:w-3/4">
//         <MyOrdersPage/>
//         </div>
//     </div>
//    </div>
//     </div>
//   )
// }

// export default profile

import React, { useEffect } from 'react';
import MyOrdersPage from './MyOrdersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice"; // <-- correct path



const Profile = () => {
 const {user} = useSelector((state) => state.auth);
 const navigate = useNavigate();
 const dispatch = useDispatch();

 useEffect(() =>{
  if(!user){
    navigate("/login");
  }
 }, [user, navigate]);
 const handleLogout = () =>{
  dispatch(logout());
  dispatch(clearCart());
  navigate("/login");
 }

  return (
    <div className="min-h-screen bg-[rgb(160_82_45/_0.1)] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        
        {/* Left Section */}
        <div className="w-full  md:w-1/3 lg:w-1/4 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center h-40 animate-fadeInUp">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 ">{user?.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{user?.email}</p>
          <button onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition transform hover:scale-105">
            Logout
          </button>
        </div>

        {/* Right Section: Orders table */}
        <div className="w-full md:w-2/3 lg:w-3/4 animate-fadeInUp">
          <MyOrdersPage />
        </div>
      </div>
    </div>
  );
};

export default Profile;



