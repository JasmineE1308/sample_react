import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import UseCart from "./hooks/UseCart";
const App = () => {
  const { cart, addToCart, removeFromCart } = UseCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <div className="p-6">
        <ProductList addToCart={addToCart} />
      </div>
      {isCartOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} closeCart={() => setIsCartOpen(false)} />
      )}
    </div>
  );
};
export default App;
