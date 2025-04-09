import React from "react";
import { useLocation } from "react-router-dom";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import KidsCategory from "./KidsCategory";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.toLowerCase() || "";

  const allProducts = [...MenCategory, ...WomenCategory, ...KidsCategory];
  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="search-results">
          {results.map((product) => (
            <div key={product._id} className="search-product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>TND {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
