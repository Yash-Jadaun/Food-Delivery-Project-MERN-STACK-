import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';  // import signin
import PaymentButton from './components/PaymentButton';




const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user
  const[showPaymentButton,setShowPaymentButton]=useState(false)

  const handlePaymentButton=()=>{
    setShowPaymentButton(true);
  }

  const handleSignUpOpen = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleSignInOpen = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignInClose = () => setShowSignIn(false);

  // When user logs in (or signs up), set user state & close modals
  const handleUserLogin = (userData) => {
    setUser(userData);  // { name, email }
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      <div className="app">
        
        <Navbar showSignUp={handleSignUpOpen} showSignIn={handleSignInOpen} user={user} />

        {showSignUp && <Signup onClose={handleSignUpClose} onSuccess={handleUserLogin} />}
        {showSignIn && <Signin onClose={handleSignInClose} onSwitchToSignup={handleSignUpOpen} onSuccess={handleUserLogin} />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        <Route
  path="/order"
  element={
    <PlaceOrder
      showPaymentButton={showPaymentButton}
      handlePaymentButton={handlePaymentButton}
    />
  }
/>

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
