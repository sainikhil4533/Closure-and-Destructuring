function shoppingCart() {
  const items = [];
  return {
    getCartItems() {
      return items;
    },
    addItem(product) {
      const idx = items.findIndex((p) => p.id === product.id);
      const qtyToAdd = product.quantity ?? 1;
      if (idx !== -1) {
        items[idx].quantity += qtyToAdd;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: qtyToAdd,
        });
      }
    },
  };
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems());

const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems());
