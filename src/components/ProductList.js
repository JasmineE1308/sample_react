import React, { useEffect, useState } from 'react';
import ProductCart from "./ProductCard";
const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
}, []);
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {/* <img src={products.image} alt='' /> */}
        {products.map(product => (
            <ProductCart key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
);
};
export default ProductList;