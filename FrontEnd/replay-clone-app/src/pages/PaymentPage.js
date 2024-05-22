import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PIoz2SBrTAldzheqpEpNjT8PaHQmzuBBMR9olrKGXVHtvQOFKQaqNV4PeAKqlWkdF4GAp7CY1wV4Sd0zRX6XUoj00H76XJd1c');

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-payment-intent', { name, amount });
      const { clientSecret } = response.data;

      const stripe = await stripePromise;
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // You will need to create a CardElement or use a pre-built CardInput component from Stripe's React library
          },
          billing_details: {
            name: name,
          },
        },
      });

      if (error) {
        console.error('Payment error:', error);
      } else {
        const transactionId = paymentIntent.id;
        await axios.post('/api/save-transaction', { name, amount, transactionId });
        alert('Payment successful!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentPage;
