import React from "react";
import "./NewCollection.css";
import NewCollectionData from "./NewCollectionData"; 

const NewCollection = () => {
  return (
    <div id="new-collection" className="collection-container">
      <h2 className="collection-title">NEW COLLECTION</h2>
      <div className="collection-products">
        {NewCollectionData.map((product) => (
          <div key={product._id} className="collection-product-card">
            <img src={product.img} alt={product.name} className="collection-product-image" />
            <p className="collection-product-name">{product.name}</p>
            <p className="collection-product-price">TND {product.price}</p>
            <p className="collection-product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;

