import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from "./component/Layout/UserLayout"
import Home from "./pages/Home"
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './component/Products/ProductDetails';
import Checkout from './component/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './component/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from "./component/Admin/UserManagement";
import ProductManagement from './component/Admin/ProductManagement';
import EditProductPage from './component/Admin/EditProductPage';
import OrderManagement from './component/Admin/OrderManagement';

import { Provider } from 'react-redux';
import store from './redux/store';

import About from './pages/About'; 
import Blog from './pages/Blog';
import ProtectedRoute from './component/Common/ProtectedRoute';




const App = () => {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Toaster position='top-right'/>
   {
    /*
    www.rabbit.com/home 
    www.rabbit.com/products 
    www.rabbit.coom/cart 

    */ 
   }
   <Routes>
    <Route path="/" element={<UserLayout />}>
    {/*User Layout*/ }
   
    <Route index element={<Home/>}/>

    {/* // 2. ADD THE NEW ROUTES HERE: */}
     <Route path="/about" element={<About/>}/> 
     <Route path="/blog" element={<Blog/>}/>
    
     <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="collection/:collection" element={<CollectionPage/>}/>
      <Route path="product/:id" element={<ProductDetails/>}/>
      <Route path ="checkout" element ={<Checkout/>}/>
      <Route path="order-confirmation/:orderId" element ={<OrderConfirmationPage/>}/>
      <Route path="order/:id" element={<OrderDetailsPage/>}/>
        <Route path ="my-orders" element={<MyOrdersPage/>}/>
          

    </Route>

    
   

    <Route path ="/admin" element={<ProtectedRoute role= "admin"><AdminLayout/></ProtectedRoute>}>
    <Route index element ={<AdminHomePage />}/>

    {/* Add these missing routes */}
  <Route path="products" element={<ProductManagement />} />
  <Route path="products/:id/edit" element={<EditProductPage />} />
  <Route path="users" element={<UserManagement />} />


  <Route path="orders" element={<OrderManagement />} />
    </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  );
};

export default App
