import React, { useState, createContext,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './pages/Home/index';
import About from './pages/About';
import Shop from './pages/Shop';
import Megamenu from './pages/MegaMenu';
import Blog from './pages/Blog';
import Vendor from './pages/Vendor';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Footer from './components/footer/footer';
import Listing from './pages/Pages/Listing';
import DetailsPage from './pages/Details';
import axios from 'axios';

const MyContext = createContext();

const App = () => { 
  const [productData, setProductData] = useState([]);

  const value = {
    
  }

  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        // console.log(response.data)
        setProductData(response.data);
      
      })
    } catch (error) {
      console.log(error.message);
    }
  }




  useEffect(() => {
    getData('http://localhost:2000/productData');
    // getCartData("http://localhost:5000/cartItems");

  
  }, []);




  return (
    productData.length !== 0 &&
   <BrowserRouter>
    <MyContext.Provider value={value}>    
    <Header data={productData}/>
      <Routes>
      <Route exact={true} path="/" element={<Home data={productData} />} />
      <Route exact={true} path="/about" element={<About/>}/>
      <Route exact={true} path="/product/details" element={<DetailsPage/>}/>
      <Route exact={true} path="/cat/:id" element={<Listing data={productData} single={true} />} />
          <Route exact={true} path="/cat/:id/:id" element={<Listing data={productData} single={false} />} />      <Route exact={true} path="/shop" element={<Shop/>}/>
      <Route exact={true} path="/megaMenu" element={<Megamenu/>}/>
      <Route exact={true} path="/blog" element={<Blog/>}/>
      <Route exact={true} path="/vendor" element={<Vendor/>}/>
      <Route exact={true} path="/pages" element={<Pages/>}/>
      <Route exact={true} path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </MyContext.Provider>

   </BrowserRouter>
     
   
  );
}

export default App
export { MyContext }
