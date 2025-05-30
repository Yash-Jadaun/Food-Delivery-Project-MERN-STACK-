import React, { useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";


import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  
const [showLogin,setShowLogin] = useState(false);
  

  return (
    <>
 {showLogin?<LoginPopup  setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowSignup={setShowLogin}
        
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;