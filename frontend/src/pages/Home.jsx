import React, { useEffect, useState } from 'react'
import Hero from '../component/Layout/Hero'
import GenderCollection from '../component/Products/GenderCollection'
import NewArrivals from '../component/Products/NewArrivals'
import ProductDetails from '../component/Products/ProductDetails'
import ProductGrid from '../component/Products/ProductGrid'
import FeaturedCollection from '../component/Products/FeaturedCollection'
import FeaturesSection from '../component/Products/FeaturesSection'
import {useDispatch, useSelector} from "react-redux"
import { fetchProductsByFilters } from '../redux/slices/productsSlice'
import axios from "axios";



const Home = () => {
  const dispatch = useDispatch();
  const {products, loading, error}  = useSelector ((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(()  =>{
    //Fetch products for a specific collection 
    dispatch (
      fetchProductsByFilters ({
        gender: "Women",
        category: "Apparel",
        limit: 10,
      })
    );

    // Fetch best Seller products 

    const fetchBestSeller = async () =>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
       console.log("Best seller response:", response.data); // <-- Add this line

        setBestSellerProduct(response.data);
      }catch (error) {
        console.error(error);
      }
    };

    fetchBestSeller();

  },[dispatch]
);
  return (
    <div>
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>

      {/* Best Seller  */}
      <h2 className='text-3xl text-center font-bold md-4'>Best Seller</h2>

      {bestSellerProduct  ? (<ProductDetails product={bestSellerProduct} />):(
        <p className ="text-center">Loading best seller products</p>
      )}
     

      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4"> Top Wears for Women </h2>
        <ProductGrid products={products} error={error}/>
      </div>

      <FeaturedCollection/>

      <FeaturesSection/>
    </div>
  )
}

export default Home
