import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import '../styles/ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // 🔴 IMPORTANT: Change this URL when running with Docker
      // For Docker: use 'http://backend:5000/api/products'
      // For local development: use 'http://localhost:5000/api/products'

      // const response = await fetch('http://backend:5000/api/products');
      const response = await fetch('http://localhost:5000/api/products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>⚠️ Error Loading Products</h2>
        <p>{error}</p>
        <button onClick={fetchProducts} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Premium Jewelry Collection</h1>
        <p>Discover our exquisite range of handcrafted jewels</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;