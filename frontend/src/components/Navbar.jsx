import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💎</span>
          <span className="logo-text">Naksh Jewels</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Products
          </Link>
          <Link to="/cart" className="navbar-link cart-link">
            <span className="cart-icon">🛒</span>
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;