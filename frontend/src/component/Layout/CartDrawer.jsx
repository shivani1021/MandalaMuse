
// import { IoMdClose } from 'react-icons/io';
// import CartContents from '../Cart/CartContents';
// import { useNavigate } from 'react-router-dom';

// const CartDrawer = ({drawerOpen, toggleCartDrawer }) => {
//   const navigate =useNavigate();
//  const handleCheckOut=()=>{
//     toggleCartDrawer();
//     navigate('/checkout');
//  };

//   return (
//     <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-[9999] ${
//         drawerOpen ? "translate-x-0":"translate-x-full"} `}
//         >

//       {/* Close button */}
//       <div className="flex justify-end p-4">
//         <button onClick={toggleCartDrawer}>
//             <IoMdClose className="h-6 w-6 text-gray-600"/>
//         </button>
//       </div>
//       {/* Cart Contents with scrollable area  */}
//       <div className="flex-grow p-4 overflow-y-auto  ">
//         <h2 className="text-xl font-semibold mb-4 border-b border-gray-300">Your cart</h2>

//         {/* Component for Cart Contents */}
//         <CartContents/>
//       </div>
       

     
//        {/* CheckOut Button fixed at the button */}
//         <div className='p-4 bg-white sticky bottom-0'>
//             <button onClick={handleCheckOut} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">Checkout</button>

//             <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping,taxes , and discount codes calculated at checkout. </p>
//         </div>
//     </div>
//   );
// };

// export default CartDrawer;


import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const {user,guestId} = useSelector((state) =>  state.auth);
  const{cart} = useSelector((state) => state.cart)
  const userId = user ? user._id : null;

  const handleCheckOut = () => {
    toggleCartDrawer();
    if (!user) {
          navigate("/login?redirect= checkout"); 
    }else {
      navigate("/checkout");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full 
      bg-white/90 backdrop-blur-xl shadow-2xl border-l border-gray-200 
      transform transition-all duration-500 ease-[cubic-bezier(.17,.67,.68,1.29)]
      flex flex-col z-[9999]
      ${drawerOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleCartDrawer}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all shadow-sm hover:shadow-md"
        >
          <IoMdClose className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Cart Title */}
      <div className="px-6 mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Your Cart
        </h2>
         {cart && cart?.products?.length> 0?( <CartContents cart = {cart} userId={userId} guestId={guestId} />):(
          <p>Your Cart is Empty</p>
         )}
        {/* <div className="h-[2px] w-16 bg-gray-900 rounded-full mt-2"></div> */}
        
      </div>

      {/* Cart Contents */}
      {/* // <div className="flex-grow px-6 pb-20 overflow-y-auto custom-scroll">
      //   <CartContents />
      // </div> */}

      {/* Checkout Area (Sticky Bottom) */}
      <div className="p-5 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg sticky bottom-0">
      {cart && cart?.products?.length> 0 && (
        <>
         <button
          onClick={handleCheckOut}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold 
          tracking-wide hover:bg-black transition-all duration-300 
          shadow-lg hover:shadow-xl"
        >
          Checkout
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Shipping, taxes & discount codes calculated at checkout.
        </p>
        
        
        
        </>
      )}
       
      </div>
    </div>
  );
};

export default CartDrawer;
