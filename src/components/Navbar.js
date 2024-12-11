import React from 'react';
const Navbar = ({ cartCount, openCart }) => {
    return (
        <nav className="bg-orange-500 p-4 flex justify-between items-center">
            <h1 className="text-white font-bold text-lg">FakeStore API</h1>
            <button className="text-white" onClick={openCart}>
                Cart ({cartCount})
            </button>
        </nav>
    );
};
export default Navbar;