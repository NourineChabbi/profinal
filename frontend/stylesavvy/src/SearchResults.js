// import React, { useState, useEffect } from "react";
// import MenCategory from "./MenCategory";
// import WomenCategory from "./WomenCategory";
// import KidsCategory from "./KidsCategory";
// import "./SearchResults.css";

// const SearchResults = () => {
//   const allProducts = [...MenCategory, ...WomenCategory, ...KidsCategory];

//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState(allProducts);

//   useEffect(() => {
//     const filtered = allProducts.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setResults(filtered);
//   }, [query]);

//   return (
//     <div className="search-results-container">
//       <h2>Search Products</h2>
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Type to search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {results.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="search-results">
//           {results.map((product) => (
//             <div key={product._id} className="search-product-card">
//               <img src={product.img} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>TND {product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
