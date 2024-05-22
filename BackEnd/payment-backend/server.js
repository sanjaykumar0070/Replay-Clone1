const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const cors = require('cors');

const stripe = Stripe('sk_test_51PIoz2SBrTAldzheUgQf0JTA2NK3xNaaIfIT4ba1RcyrPsECJSNs30ExTND3ehf3QPnW1i8h1nIkHnYYHBYz6Pt800kLdUOFxZ');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const TransactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  transactionId: String,
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

app.post('/api/create-payment-intent', async (req, res) => {
  const { name, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post('/api/save-transaction', async (req, res) => {
  const { name, amount, transactionId } = req.body;

  try {
    const newTransaction = new Transaction({ name, amount, transactionId });
    await newTransaction.save();
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
