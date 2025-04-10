import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Men.css";

const Men = () => {
  const [Products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState(12); // State for tracking number of shown products

  useEffect(() => {
    fetch("http://localhost:5000/product/men")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalProducts = Products.length;

  const handleExploreMore = () => {
    setShownProducts((prev) => Math.min(prev + 12, totalProducts)); // Increment the number of shown products
  };

  return (
    <div className="container">
      <div className="header-section">
        <p>
          Showing {shownProducts} out of {totalProducts} products
        </p>
        <button>Sort by ▼</button>
      </div>

      <h1>MEN'S COLLECTION</h1>
      <div className="grid-container">
        {Products.slice(0, shownProducts).map((item) => (
          <div key={item._id} className="product-card">
            <Link to={`/product/${item._id}`}>
              <img src={item.img} alt={item.name} className="product-image" />
            </Link>
            <h3 className="product-title">
              <Link
                to={`/product/${item._id}`}
                className="product-link"
                style={{ textDecoration: "none", color: "black" }}
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

export default Men;
