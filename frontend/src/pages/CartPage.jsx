import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState(null);

  const total = getCartTotal();

  const handleCheckout = async () => {
    setIsSubmitting(true);
    setOrderError(null);

    try {
      const cartData = {
        items: cartItems.map(item => ({
          id: item.id,
          quantity: item.quantity
        }))
      };

      // 🔴 IMPORTANT: Change this URL when running with Docker
      // For Docker: use 'http://backend:5000/api/cart'
      // For local development: use 'http://localhost:5000/api/cart'

      // 
      // const response = await fetch('http://backend:5000/api/cart', {

      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit order');
      }

      setOrderSuccess(true);
      setTimeout(() => {
        clearCart();
        setOrderSuccess(false);
      }, 3000);

    } catch (err) {
      setOrderError(err.message);
      console.error('Error submitting order:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0 && !orderSuccess) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Add some beautiful jewelry to your cart!</p>
        <a href="/" className="continue-shopping-btn">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>

      {orderSuccess && (
        <div className="success-message">
          ✓ Order placed successfully! Thank you for shopping with us.
        </div>
      )}

      {orderError && (
        <div className="error-message">
          ⚠️ {orderError}
        </div>
      )}

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Tax (18%):</span>
            <span>₹{(total * 0.18).toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping:</span>
            <span className="free">Free</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{(total * 1.18).toLocaleString()}</span>
          </div>

          <button 
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;