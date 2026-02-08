// Validation middleware for cart data
const validateCart = (req, res, next) => {
  const { items } = req.body;

  // Check if items exist
  if (!items) {
    return res.status(400).json({
      success: false,
      message: "Cart items are required"
    });
  }

  // Check if items is an array
  if (!Array.isArray(items)) {
    return res.status(400).json({
      success: false,
      message: "Items must be an array"
    });
  }

  // Check if items array is empty
  if (items.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Cart cannot be empty"
    });
  }

  // Validate each item
  for (let item of items) {
    if (!item.id || !item.quantity) {
      return res.status(400).json({
        success: false,
        message: "Each item must have id and quantity"
      });
    }

    if (typeof item.quantity !== 'number' || item.quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive number"
      });
    }
  }

  next();
};

module.exports = { validateCart };