const express = require('express');
const router = express.Router();
const products = require('../data/products');
const { validateCart } = require('../middleware/validation');

// GET /products - Get all products
router.get('/products', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message
    });
  }
});

// POST /cart - Submit cart data
router.post('/cart', validateCart, (req, res) => {
  try {
    const { items } = req.body;
    
    // Calculate total
    let total = 0;
    const cartDetails = items.map(item => {
      const product = products.find(p => p.id === item.id);
      if (product) {
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        return {
          productId: item.id,
          name: product.name,
          quantity: item.quantity,
          price: product.price,
          itemTotal: itemTotal
        };
      }
      return null;
    }).filter(item => item !== null);

    res.status(200).json({
      success: true,
      message: "Cart submitted successfully",
      data: {
        items: cartDetails,
        totalAmount: total,
        itemCount: items.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error processing cart",
      error: error.message
    });
  }
});

module.exports = router;