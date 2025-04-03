import React from "react";
import products from "./Data"; 
import './PopularWomen.css'

const PopularWomen = () => {
  const filteredProducts = products.filter((item) => item.category === "femme");

  return (
    <div className="container" id="popular-women">
      <h2 className="popular-title">POPULAR IN WOMEN</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.img} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">TND{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularWomen;
