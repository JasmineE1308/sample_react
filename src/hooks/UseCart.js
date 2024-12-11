import { useState } from 'react';
export const UseCart = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const isAlreadyInCart = cart.some(item => item.id === product.id);
        if (isAlreadyInCart) {
            alert("Item already added to the cart");
            return;
        }
        setCart([...cart, product]);
    };
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    return { cart, addToCart, removeFromCart };
};
export default UseCart;