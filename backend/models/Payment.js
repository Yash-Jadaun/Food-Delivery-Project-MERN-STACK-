import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  razorpayOrderId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: { type: String, default: 'created' },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
