import React from 'react';
const CartModal = ({ cart, removeFromCart, closeCart }) => {
    return (
        <div className="fixed inset-0 bg-gray--800 bg-opacity-75 flex-items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">your Cart</h2>
                {cart.length === 0 ? (
                    <p>your cart is empty</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded-lg"
                                onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))
                )}
                <button className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={closeCart}>Close</button>
            </div>
        </div>
    );
};
export default CartModal;
