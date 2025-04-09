import React from "react";
import { useParams } from "react-router-dom";
import KidsCategory from "./KidsCategory"; 
import "./ProductDetailsKids.css"; 
import { useCart } from "./CartContext";

const ProductDetailsKids = () => {
  const { id } = useParams();
  const product = KidsCategory.find((item) => item._id.toString() === id);
  const { addToCart } = useCart(); 

  if (!product) {
    return <h2>Product not found</h2>;
  }

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
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
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

export default ProductDetailsKids;
