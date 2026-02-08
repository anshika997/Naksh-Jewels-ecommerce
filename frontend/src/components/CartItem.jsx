import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartItem.css';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button 
            className="quantity-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <div className="cart-item-total">
          ₹{itemTotal.toLocaleString()}
        </div>
        
        <button 
          className="remove-btn"
          onClick={handleRemove}
          aria-label="Remove item"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default CartItem;