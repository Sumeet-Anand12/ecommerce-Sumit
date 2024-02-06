import React, { useState, createContext } from 'react';
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

const MyContext = createContext();

const App = () => { 
  const [productData, setProductData] = useState([]);

  const value = {
    
  }

  return (
   <BrowserRouter>
    <MyContext.Provider value={value}>    
    <Header/>
      <Routes>
      <Route exact={true} path="/" element={<Home/>}/>
      <Route exact={true} path="/about" element={<About/>}/>
      <Route exact={true} path="/product/details" element={<DetailsPage/>}/>
      <Route exact={true} path="/listing" element={<Listing/>}/>
      <Route exact={true} path="/shop" element={<Shop/>}/>
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
