// import React from 'react'
// import { Link,NavLink, useNavigate } from "react-router-dom";
// import { FaUser, FaClipboardList, FaBoxOpen, FaStore, FaSignOutAlt } from "react-icons/fa";



// const AdminSidebar = () => {
//     const navigate =useNavigate();
//     const handleLogout =() => {
//         navigate("/")
//     }
//   return (
//     <div className='p-6 '>
//         <div className="mb-6">
//             <Link to="/admin" className="text-2xl font-medium">MandalaMuse</Link>
//         </div>
//       <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

//       <nav className="flex flex-col space-y-2">
//         <NavLink to="/admin/users" className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
//             <FaUser />
//             <span>User</span>
//         </NavLink>

//         <NavLink to="/admin/products" className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
//             <FaBoxOpen />
//             <span>Products</span>
//         </NavLink>

//         <NavLink to="/admin/orders" className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
//             <FaClipboardList />
//             <span>Orders</span>
//         </NavLink>

//         <NavLink to="/" className={({isActive}) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
//             <FaStore />
//             <span>Shop</span>
//         </NavLink>
//       </nav>

//       <div className="mt-6">
//         <button 
//         onClick={handleLogout}
//          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
//             <FaSignOutAlt/>
//             <span>Logout</span>
//          </button>
//       </div>
//     </div>
//   )
// }

// export default AdminSidebar

import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaClipboardList, FaBoxOpen, FaStore, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { clearCart } from '../../redux/slices/cartSlice';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div
      className="
        p-6 h-screen bg-gray-900 text-gray-200 shadow-xl
        animate-[slideInLeft_0.6s_ease-out]
      "
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <Link
          to="/admin"
          className="
            text-3xl font-extrabold tracking-wide
            bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent
            drop-shadow-lg animate-pulse
          "
        >
          MandalaMuse
        </Link>
      </div>

      <h1 className="text-xl font-semibold mb-6 text-center text-gray-300">
      <Link to={"/admin"}>  Admin Dashboard</Link> 
      </h1>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-3">
        {[
          { to: "/admin/users", icon: <FaUser />, label: "Users" },
          { to: "/admin/products", icon: <FaBoxOpen />, label: "Products" },
          { to: "/admin/orders", icon: <FaClipboardList />, label: "Orders" },
          { to: "/", icon: <FaStore />, label: "Shop" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
              ${
                isActive
                  ? "bg-amber-500 text-gray-900 shadow-lg scale-[1.02]"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-[1.02]"
              }
            `
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="
            w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg
            flex items-center justify-center gap-2
            transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl
          "
        >
          <FaSignOutAlt />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
