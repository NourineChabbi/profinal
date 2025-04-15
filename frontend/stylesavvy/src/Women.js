import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Women.css";

const Women = () => {
  const [Products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState(12);

  useEffect(() => {
    fetch("http://localhost:5001/product/women")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to fetch women products:", error);
      });
  }, []);

  const totalProducts = Products.length;

  const handleExploreMore = () => {
    setShownProducts(prev => Math.min(prev + 12, totalProducts));
  };

  return (
    <div className="container">
      <div className="header-section">
        <p>Showing {Math.min(shownProducts, totalProducts)} out of {totalProducts} products</p>
        <button>Sort by ▼</button>
      </div>

      <h1>WOMEN'S COLLECTION</h1>

      <div className="grid-container">
        {Products.slice(0, shownProducts).map((item) => (
          <div key={item._id} className="product-card">
            <Link to={`/product-women/${item._id}`} state={{ product: item }}>
              <img src={item.img} alt={item.name} className="product-image" />
            </Link>
            <h3 className="product-title">
              <Link
                to={`/product-women/${item._id}`}
                state={{ product: item }}
                className="product-link"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {item.name}
              </Link>
            </h3>
            <p className="product-description">{item.description}</p>
            <p className="product-price">TND {item.price}</p>
          </div>
        ))}
      </div>

      <div className="explore-more">
        {shownProducts < totalProducts && (
          <button onClick={handleExploreMore}>Explore more</button>
        )}
      </div>
    </div>
  );
};

export default Women;
