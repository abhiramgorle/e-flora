import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import Pdit from './pages/Pdit/Pdit'
import Search from './pages/Search/Search'
import Blogs from './pages/Blogs/Blogs'
import Contactus from './pages/Contactus/Contactus'
import Recommend from './pages/recommendations/Recommend'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element= {<Search />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/item/:id' element= {<Pdit />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/contact-us' element={<Contactus />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/recommendations' element={<Recommend />}/>
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App;
