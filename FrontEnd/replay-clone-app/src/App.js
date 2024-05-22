import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import TransactionsPage from './pages/TransactionsPage';
import './styles/main.css';
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>  
    </Router>
  );
}

export default App;
