import React from 'react';
import axios from 'axios';

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      // amount in paise
      const amountInPaise = 50000; // ₹500

      const response = await axios.post('http://localhost:4000/api/payment/create-order', {
        amount: amountInPaise,
        currency: 'INR',
      });

      const { id: order_id, amount, currency } = response.data;

      if (!window.Razorpay) {
        alert('Razorpay SDK not loaded. Please check your script import.');
        return;
      }

      const options = {
        key: "rzp_test_KpGkjjGiGjm4qF",
        amount: amount,
        currency: currency,
        name: "GoFood",
        description: "Food Order Payment",
        order_id,
        handler: function (response) {
          alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
          // यहाँ आप payment confirmation backend को भेज सकते हो
        },
        prefill: {
          name: "Yash Jadaun",
          email: "yash@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("❌ Payment initiation failed.");
    }
  };

  return (
    <button className="btn btn-primary" onClick={handlePayment}>
      Pay Now
    </button>
  );
};

export default PaymentButton;
