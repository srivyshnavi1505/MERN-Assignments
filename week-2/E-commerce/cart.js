import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return 'Product not found';

  if (!checkStock(productId, quantity)) {
    return 'Not enough stock';
  }
  const existingItem = cartItems.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  return 'Item added to cart';
}


export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return 'Item removed from cart';
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return 'Not enough stock';
  }
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return 'Item not in cart';
  item.quantity = newQuantity;
  return 'Quantity updated';
}

export function getCartItems() {
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
  return getCartItems().reduce((sum, item) => sum + item.totalPrice, 0);
}

export function clearCart() {
  cartItems = [];
}
