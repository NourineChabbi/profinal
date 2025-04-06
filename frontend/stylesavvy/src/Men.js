import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import MenCategory from "./MenCategory";
import "./Men.css";

const Men = () => {
  const totalProducts = MenCategory.length;
  const [displayedProducts, setDisplayedProducts] = useState(12);

  const handleExploreMore = () => {
    setDisplayedProducts(prev => Math.min(prev + 12, totalProducts));
  };

  return (
    <div className="container">
      <div className="header-section">
        <p>Showing {displayedProducts} out of {totalProducts} products</p>
        <button>Sort by ▼</button>
      </div>

      <h1>MEN'S COLLECTION</h1>
      <div className="grid-container">
        {MenCategory.slice(0, displayedProducts).map((item) => (
          <div key={item._id} className="product-card">
            <Link to={`/product/${item._id}`}>
              <img src={item.img} alt={item.name} className="product-image" />
            </Link>
            <h3 className="product-title">
              <Link to={`/product/${item._id}`} className="product-link" style={{ textDecoration: 'none', color: 'black' }} >
                {item.name}
              </Link>
            </h3>
            <p className="product-description">{item.description}</p>
            <p className="product-price">TND{item.price}</p>
          </div>
        ))}
      </div>

      <div className="explore-more">
        {displayedProducts < totalProducts && (
          <button onClick={handleExploreMore}>Explore more</button>
        )}
      </div>
    </div>
  );
};

export default Men;


