import React from 'react';
const ProductCard = ({ product, addToCart })=> {
    return (
        <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
            {/* <img src={product.thumbnailurl} alt={product.title} className="h-48 w-48 object-cover" /> */}
            <img src={product.image}className="h-48 w-48 object-cover"  alt='' />
            <h2 className="font-bold text-lg my-2">{product.title}</h2>
            <p className="text-lg text-green-600">${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white mt-4 py-2 px-4 rounded-lg">
                Add to Cart
            </button>
        </div>
    );
};
export default ProductCard;