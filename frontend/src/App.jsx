import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Login from './components/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('name'));

  // Optional: Keep in sync in case another tab logs in
  useEffect(() => {
    const handleStorage = () => {
      setUserName(localStorage.getItem('name'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <>
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin}>
          <Login setUserName={setUserName} />
        </LoginPopup>
      )}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} userName={userName} setUserName={setUserName} />
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
