import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { updateCartItemQuantity, removeFromCart } from '../../redux/slices/cartSlice';
// import products from '../../../../backend/data/products';

const CartContents = ({cart, userId, guestId}) => {
const dispatch = useDispatch();

// Extract productId safely
  const getProductId = (item) => {
    return item.productId?._id || item.productId; 
  };

//Handle adding or substracting to cart 
// const handleAddToCart =(productId, delta,quantity,size,color )=>{
//     console.log("Updating:", { productId, size, color, quantity: quantity + delta });
//     const newQuantity = quantity +delta ;
//     if (newQuantity >=1){
//         dispatch(
//             updateCartItemQuantity({
//                 productId,
//                 quantity: newQuantity,
//                 guestId,
//                 userId,
//                 size,
//                 color,
//             })
//         )
//     }
// };

  // Handle Increment / Decrement
  const handleAddToCart = (product, delta) => {
    const productId = getProductId(product);
    const newQuantity = product.quantity + delta;

    console.log("Updating:", { productId, newQuantity });

    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size: product.size,
          color: product.color,
        })
      );
    }
  };



  // Remove Item From cart
// const handleRemoveFromCart = (productId, size, color)  =>{
//     console.log("Removing:", { productId, size, color });
//     dispatch (removeFromCart({productId,guestId,userId,size,color}));
// }

const handleRemoveFromCart = (product) => {
    const productId = getProductId(product);

    console.log("Removing:", { productId });

    dispatch(
      removeFromCart({
        productId,
        guestId,
        userId,
        size: product.size,
        color: product.color,
      })
    );
  };

  return (
    <div>
        {
            cart.products.map((product, index)=>(
               <div key={index} className="flex items-start justify-between py-4 border-b">

                <div className="flex items-start">
                    <img src={product.image} alt={product.name}className="w-20 h-24 object-cover mr-4 rounded" />
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text-sm text-gray-500" >
                            size:{product.size} | color: {product.color}
                        </p>
                        <div className='flex items-center mt-2'>
                            <button onClick ={()=> handleAddToCart(product, -1,
                                //  product.quantity,
                                //  product.size,
                                //  product.color,
                                 )}
                                 className='border rounded px-2 py-1 text-xl font-medium'>
                                    -
                                    </button>
                            <span className='mx-4'>{product.quantity}</span>
                            <button onClick ={()=> handleAddToCart(product, 1,
                                //  product.quantity,
                                //  product.size,
                                //  product.color,
                                 )}
                            className='border rounded px-2 py-1 text-xl font-medium'>
                                +
                                </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>₹{product.price.toLocaleString()}</p>
                    <button onClick={() => handleRemoveFromCart(
                        product,)}>
                        <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
                    </button>
                </div>
               </div>
            ))
        }
    </div>
  )
}

export default CartContents
