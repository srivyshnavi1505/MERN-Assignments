import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);   // 1. Get product details
  if (!product) return 'Product not found';
 // 2. Check stock availability
  if (!checkStock(productId, quantity)) {
    return 'Not enough stock';
  }
   // 3. Check if product already in cart
  const existingItem = cartItems.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  return 'Item added to cart';
}


export function removeFromCart(productId) {
      // Remove product from cart
  cartItems = cartItems.filter(item => item.productId !== productId);
  return 'Item removed from cart';
}

   // Update quantity of product in cart

export function updateQuantity(productId, newQuantity) {
                                // Check stock before updating

  if (!checkStock(productId, newQuantity)) {
    return 'Not enough stock';
  }
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return 'Item not in cart';
  item.quantity = newQuantity;
  return 'Quantity updated';
}

export function getCartItems() {
     // Return all cart items with product details
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
    // Calculate total price of all items in cart
  return getCartItems().reduce((sum, item) => sum + item.totalPrice, 0);
}

export function clearCart() {
     // Empty the cart
  cartItems = [];
}
