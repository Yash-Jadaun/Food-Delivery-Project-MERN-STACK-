import express from 'express';
import razorpayInstance from '../controllers/razorpay.js';
import Payment from '../models/Payment.js';

const router = express.Router();

router.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const order = await razorpayInstance.orders.create({
      amount: amount * 100, // paise me convert kar rahe hain
      currency: currency || 'INR',
      receipt: 'receipt_' + Date.now(),
      payment_capture: 1,
    });

    // Razorpay order create ho gaya, ab usko MongoDB me save karte hain
    const paymentRecord = new Payment({
      razorpayOrderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      createdAt: new Date(order.created_at * 1000), // Unix timestamp se date convert
    });

    await paymentRecord.save();

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating RazorPay order');
  }
});

export default router;
