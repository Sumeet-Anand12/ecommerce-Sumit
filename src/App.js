
import React, { useState, createContext,useEffect } from 'react';
import './responsive.css';
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
import Cart from './pages/cart/index';
import data from './data';
import SignIn from './pages/Pages/SignIn/index.js';
import SignUp from './pages/Pages/SignUp';
import Loader from './assets/images/loading.gif';

const MyContext = createContext();

const App = () => { 
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenFilters, setIsopenFilters] = useState(false);

  const [isopenNavigation, setIsopenNavigation] = useState(false);
 

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

  const getCartData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setCartItems(response.data);
      })

    } catch (error) {
      console.log(error.message);
    }
  }

   const addToCart = async (item) => {
    item.quantity = 1;
    // console.log(item)

    try {
      await axios.post("http://localhost:2000/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error)
    }

  }

  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }

  const emptyCart = () => {
    setCartItems([])
  }
  const openFilters=()=>{
    setIsopenFilters(!isOpenFilters)
  }

  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }


  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  }


  const value = {
    cartItems,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    windowWidth,
    isOpenFilters,
    openFilters,
    isLogin,
    signOut,
    signIn,
    setIsopenNavigation
    
  }
 
  useEffect(() => {
    // getData('http://localhost:2000/productData');
    // getCartData("http://localhost:2000/cartItems");

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);

    setTimeout(() => {
      setProductData(data[1]);
      setIsloading(false);
    }, 3000);

  
  }, []);




  return (
    // productData.length !== 0 &&
    data.productData.length !== 0 &&
   <BrowserRouter>
    <MyContext.Provider value={value}>    
    {/* <Header data={productData}/> */}

    {
          isLoading===true && <div className='loader'><img src={Loader}/></div>
        }
    <Header data={data.productData} />

      <Routes>
      {/* <Route exact={true} path="/" element={<Home data={productData} />} /> */}
      {/* <Route exact={true} path="/about" element={<About/>}/>
      <Route exact={true} path="/cat/:id" element={<Listing data={productData} single={true} />} />
      <Route exact={true} path="/cat/:id/:id" element={<Listing data={productData} single={false} />} />  
      <Route exact={true} path="/product/:id" element={<DetailsPage data={productData} />} /> */}
       <Route exact={true} path="/" element={<Home data={data.productData} />} />
        <Route exact={true} path="/cat/:id" element={<Listing data={data.productData} single={true} />} />
        <Route exact={true} path="/cat/:id/:id" element={<Listing data={data.productData} single={false} />} />
        <Route exact={true} path="/product/:id" element={<DetailsPage data={data.productData} />} />
        <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
         
      <Route exact={true} path="/cart" element={<Cart />} />
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
