import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <div className="left">
        <img src={product.img} alt={product.name} className="main-image" />
      </div>
      <div className="right">
        <h1>{product.name}</h1>

        <div className="rating">
          <div className="stars">★★★★★</div>
          <span className="review-count">(32)</span>
        </div>

        <p>{product.description}</p>
        <p className="price">TND {product.price}</p>

        <div className="sizes">
          <p>Select Size:</p>
          <div className="size-buttons">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>

        <button className="add-to-cart" onClick={() => addToCart(product)}>ADD TO CART</button>
        <p className="product-category">
          <span>Category :</span> {product.category}
        </p>
        <p className="product-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;




