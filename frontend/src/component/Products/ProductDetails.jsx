import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productsSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { useSelector } from "react-redux";



const ProductDetails = ({productId,product}) => {

  const {id} =useParams();
  const dispatch =useDispatch();
  const {selectedProduct, loading, error, similarProducts} = useSelector((state) => state.products);
  const {user,guestId} = useSelector((state)=>state.auth);


  // const [mainImage,setMainImage]= useState("");
  const [mainImage, setMainImage] = useState(product?.images?.[0]?.url || selectedProduct?.images?.[0]?.url || "");

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] =useState("");
  const [quantity, setQuantity] =useState(1);
  const [isButtonDisabled, setIsButtonDisabled] =useState(false);

  const productFetchId = productId|| product?._id || id;
  const productData = product || selectedProduct;


//   useEffect(() =>{
//     if( !product && productFetchId){
//       dispatch(fetchProductDetails(productFetchId));
//       dispatch(fetchSimilarProducts({id: productFetchId}));
//     }
//   },[dispatch,product,productFetchId]
// );

useEffect(() =>{
    // 1. Only fetch MAIN product details if the product prop is missing
    if( !product && productFetchId){ 
      dispatch(fetchProductDetails(productFetchId));
    }
    
    // 2. ALWAYS fetch similar products if we have an ID
    if (productFetchId) { // <--- ADD THIS SEPARATE CHECK
        dispatch(fetchSimilarProducts({id: productFetchId}));
    }
    
  },[dispatch,product,productFetchId]
);




  const colorMap = {
  'Walnut Stain': '#7B3F00',
  'Natural Oak': '#D2B48C'
};

useEffect(() => {
  if (product?.images?.length) setMainImage(product.images[0].url);
  else if (selectedProduct?.images?.length) setMainImage(selectedProduct.images[0].url);
}, [product, selectedProduct]);


  const handleQuantityChange =(action) =>{
    if (action === "plus") setQuantity((prev) => prev +1);
    if (action === "minus" && quantity > 1)  setQuantity((prev) => prev -1);
  }

  const handleAddToCart =() =>{
    const requiresSize = productData?.sizes?.length > 0;
    if ((requiresSize && !selectedSize) || !selectedColor){
      toast.error("Please select a size and color before adding to cart", {
        duration:1000,
      });
      return;
    }
   setIsButtonDisabled(true);

   dispatch(
    addToCart({
      productId: productFetchId,
      quantity,
      size: selectedSize,
      color: selectedColor,
      guestId,
      userid: user?._id,
    })
   )

  .then(()=>{
    toast.success("Product added to cart!",{
      duration: 1000,
    });
  })
  .finally(() =>{
    setIsButtonDisabled(false);
  });

 
  };

  if(loading){
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error:{error}</p>
  }

  
  return (
    <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
     

{productData && (
  <div className='flex flex-col md:flex-row'>
    {/* Left Thumbnails */}
    <div className="hidden md:flex flex-col space-y-4 mr-6">
      {productData.images.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt={img.altText || `Thumbnail ${index}`}
          className={`w-25 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === img.url ? "border-black" : "border-gray-300"}`}
          onClick={() => setMainImage(img.url)}
        />
      ))}
    </div>

    {/* Main Image */}
    <div className="md:w-1/2">
      <div className="mb-4">
        <img src={mainImage} alt={productData.name} className='w-full h-auto object-cover rounded-lg' />
      </div>

      {/* 3. NEW THUMBNAILS BLOCK - HORIZONTAL on Mobile (flex), Hidden on Desktop (md:hidden) */}
      <div className="flex md:hidden overflow-x-auto space-x-3 mb-6 pb-2">
        {productData.images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.altText || `Thumbnail ${index}`}
            // Smaller size for mobile, and flex-shrink-0 to prevent squashing
            className={`w-20 h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border ${mainImage === img.url ? "border-black" : "border-gray-300"}`}
            onClick={() => setMainImage(img.url)}
          />
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="md:w-1/2 md:ml-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{productData.name}</h1>
      <p className="text-xl text-gray-500 mb-2">₹ {productData.price}</p>
      <p className="text-gray-600 mb-4">{productData.description}</p>

   
      {/* Color Selector */}

      
{productData.colors?.length > 0 && (
  <div className="mb-4">
    <p className="text-gray-700">Color:</p>
    <div className="flex gap-2 mt-2">
      {productData.colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
 style={{ backgroundColor: colorMap[color] || 'gray' }}        />
      ))}
    </div>
  </div>
)}

{/* Rating and Reviews */}
  <div className="flex items-center mb-2">
    <span className="text-yellow-500 mr-2">
      {'★'.repeat(productData.rating) /* Shows filled stars */}
      {'☆'.repeat(5 - productData.rating) /* Shows empty stars */}
    </span>
    <span className="text-gray-600">({productData.numReviews} reviews)</span>
  </div>

  {/* Material */}
  {productData.material && (
    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Material:</span> {productData.material}
    </p>
  )}

  {/* Category */}
  {productData.category && (
    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Category:</span> {productData.category}
    </p>
  )}

  {/* Collections */}
  {productData.collections && (
    <p className="text-gray-700 mb-4">
      <span className="font-semibold">Collections:</span> {productData.collections}
    </p>
  )}


 
      {/* Size Selector */}
      {productData.sizes?.length > 0 && (
        <div className="mb-4">
          <p className="text-gray-700">Size:</p>
          <div className="flex gap-2 mt-2">
            {productData.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center mb-4">
  <p className="mr-4 text-gray-700 font-semibold">Quantity:</p>
  <div className="flex items-center border rounded">
    <button
      onClick={() => handleQuantityChange("minus")}
      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      disabled={quantity === 1}
    >
      -
    </button>
    <span className="px-4">{quantity}</span>
    <button
      onClick={() => handleQuantityChange("plus")}
      className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
    >
      +
    </button>
  </div>
</div>
      <button
  onClick={handleAddToCart}
  disabled={isButtonDisabled}
className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
>
  Add to Cart
</button>





  

    </div>
  </div>
)}

        <div className="mt-20">
  <h2 className="text-4xl text-center font-bold mb-4">You May Also Like</h2>

  <ProductGrid products={similarProducts} loading={loading} error ={error} scrollable={true} />
</div>

    
    
    </div>
  )
}

export default ProductDetails


 