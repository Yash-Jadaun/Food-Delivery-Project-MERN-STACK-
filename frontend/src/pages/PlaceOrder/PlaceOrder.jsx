import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import PaymentButton from '../../components/PaymentButton'; // Add if not already

const PlaceOrder = ({ showPaymentButton, handlePaymentButton }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="tel" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + 2}</b>
            </div>
          </div>

          <button type="button" onClick={handlePaymentButton}>
            PROCEED TO PAYMENT
          </button>

          {showPaymentButton && <PaymentButton amount={getTotalCartAmount() + 2} />}
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
