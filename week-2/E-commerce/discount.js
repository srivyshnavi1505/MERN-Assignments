const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': {
    type: 'percentage',
    value: 20,
    minAmount: 10000,
    category: 'electronics'
  }
};

export function validateCoupon(code, cartTotal, cartItems) {
  const coupon = coupons[code];
     // 1. Check if coupon exists

  if (!coupon) return { valid: false, message: 'Invalid coupon' };
  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: 'Minimum amount not met' };
  }
  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasCategory = cartItems.some(
      item => item.category === coupon.category
    );
    if (!hasCategory) {
      return { valid: false, message: 'Coupon not applicable for this cart' };
    }
  }
  return { valid: true, message: 'Coupon applied' };
}
 // Calculate discount amount based on coupon type
export function calculateDiscount(code, cartTotal) {
  const coupon = coupons[code];
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  return coupon.value;
}

export function applyDiscount(cartTotal, code, cartItems) {
    
 // 1. Validate coupon
  const validation = validateCoupon(code, cartTotal, cartItems);
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }
// 2. If valid, calculate discount
  const discount = calculateDiscount(code, cartTotal);
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: 'Discount applied '
  };
}
