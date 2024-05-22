import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionCard from '../components/TransactionCard';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <div className="transactions-grid">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction._id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
