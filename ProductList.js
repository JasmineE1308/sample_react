function ProductList({products, addToCart}){

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src = {product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>$ 1000{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )

}

export default ProductList;