import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight, HiChevronDown} from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Navbar = () => {

 const [drawerOpen, setDrawerOpen]= useState(false);
 const [navDrawerOpen, setNavDrawerOpen] =useState(false);
 const {cart} = useSelector((state) => state.cart);
 const  {user} = useSelector((state) => state.auth)

 const cartItemCount = cart?.products?.reduce((total,product) => total+ product.quantity,
0
)|| 0;

 const toggleNavDrawer =() => {
    setNavDrawerOpen(!navDrawerOpen);
 }

    const toggleCartDrawer = ()=>{
        setDrawerOpen(!drawerOpen);
    };

  return (
    <>
<nav className='container mx-auto flex items-center justify-between py-4 px-6 bg-gradient-to-r from-purple-50 to-white shadow-lg border-b border-purple-100'>
        {/*
         Left -Logo
        */}
        <div>
            <Link to="/" className="text-2xl font-medium hover:text-yellow-900 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg" >MandalaMuse
            </Link>
        </div>
        {/*Center -Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
            <Link to ="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Home
            </Link> 
            {/* <Link to ="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Shop
            </Link>  */}

            <div className="relative group z-[100]">
        {/* Dropdown Trigger */}
        <button  className="flex items-center space-x-1 text-gray-700 hover:text-black text-sm font-medium uppercase focus:outline-none">
            <span>Shop</span>
            <HiChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {/* Dropdown Menu */}
        <div
            className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-44 opacity-0 invisible
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-1  z-[100]
                    transition-all duration-300"
        >
            <Link
            to="/collection/all?category=Home+Decor"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
            Home Decor 
            </Link>
            <Link
            to="/collection/all?category=Accessories"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
            Accessories
            </Link>
            <Link
            to="/collection/all?category=Apparel"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
              Apparel
          
            </Link>
            <div className="border-t my-1"></div>
            <Link
            to="/collection/all"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
            View All
            </Link>
        </div>
        </div>

        
            <Link to ="/about" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            About
            </Link> 
            <Link to ="/blog" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Blog
            </Link> 

           


        </div>
  {/*
        Right -Icons 
        */}

        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
             <Link to="/admin" className='block rounded bg-black px-2 text-sm text-white hover:bg-yellow-800 transition-all duration-300 hover:scale-105 shadow-md'>Admin</Link>

          ) }
            <Link to ="/profile" className="hover:text-black-600 transition-all duration-300 hover:scale-110">
            <HiOutlineUser className='h-6 w-6 text-gray-700'/>
            </Link>
             <button 
            onClick={toggleCartDrawer}
            className='relative hover:text-purple-600 transition-all duration-300 hover:scale-110'
          >
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
            {cartItemCount > 0 && ( <span className='absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 animate-pulse shadow-sm'>
             {cartItemCount}
            </span>)}
           
          </button>
        
        {/*Search*/}
        <div className="overflow-hidden">
            <SearchBar/>
        </div>
       

         <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700"/>
         </button>

      

        </div>

        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

         {/* Mobile Navigation */}
<div
  className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full 
  bg-white/90 backdrop-blur-xl border-r border-gray-200
  shadow-2xl transform transition-all duration-500 
  ease-[cubic-bezier(.17,.67,.83,1.35)] z-50
  ${navDrawerOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      onClick={toggleNavDrawer}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300
      transition-all shadow-sm hover:shadow-md"
    >
      <IoMdClose className="h-6 w-6 text-gray-700" />
    </button>
  </div>

  {/* Menu Content */}
  <div className="p-6 animate-slideUp">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
      Menu
    </h2>

    <nav className="space-y-5 text-lg">
      <Link
        to="/"
        onClick={toggleNavDrawer}
        className="block text-gray-700 hover:text-black transition-all duration-200 hover:translate-x-1"
      >
        Home
      </Link>

      {/* Dropdown Section */}
      <div className="relative group">
        <button className="flex items-center justify-between w-full text-gray-700 hover:text-black text-lg font-medium uppercase tracking-wide transition-all">
          <span>Shop</span>
          <HiChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
        </button>

        {/* Dropdown Menu */}
        <div
          className="absolute left-0 mt-3 bg-white/95 backdrop-blur-xl 
          border border-gray-200 rounded-xl shadow-xl w-48
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          group-hover:translate-y-2 transition-all duration-300 p-2"
        >
          <Link
            to="/collection/all?category=Home+Decor"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-md transition"
          >
            Home Decor
          </Link>

          <Link
            to="/collection/all?category=Accessories"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-md transition"
          >
            Accessories
          </Link>

          <Link
            to="/collection/all?category=Apparel"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-md transition"
          >
           Apparel
          </Link>

          <div className="border-t my-2"></div>

          <Link
            to="/collection/all"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-black rounded-md transition"
          >
            View All
          </Link>
        </div>
      </div>

      <Link
        to="about"
        onClick={toggleNavDrawer}
        className="block text-gray-700 hover:text-black transition-all duration-200 hover:translate-x-1"
      >
        About
      </Link>

      <Link
        to="/blog"
        onClick={toggleNavDrawer}
        className="block text-gray-700 hover:text-black transition-all duration-200 hover:translate-x-1"
      >
        Blog
      </Link>

     
    </nav>
  </div>
</div>

{/* Animations */}
<style>
{`
  @keyframes slideUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-slideUp {
    animation: slideUp 0.5s ease-out;
  }
`}
</style>

        </>

        
  )
}

export default Navbar


