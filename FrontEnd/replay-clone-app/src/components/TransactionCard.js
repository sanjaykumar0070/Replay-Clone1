import React from 'react';

const TransactionCard = ({ transaction }) => {
  return (
    <div className="transaction-card">
      <p>Name: {transaction.name}</p>
      <p>Amount: ${transaction.amount}</p>
    </div>
  );
};

export default TransactionCard;
