import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);  // This should print your key

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default razorpayInstance;
