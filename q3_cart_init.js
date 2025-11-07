function shoppingCart() {
  const items = [];
  return {
    getCartItems() {
      return items;
    },
  };
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());
