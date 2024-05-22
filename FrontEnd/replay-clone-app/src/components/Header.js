import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Payment</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
