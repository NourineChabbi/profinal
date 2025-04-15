import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from './Assests/logo.jpg';
import cart_icon from './Assests/cart_icon.png';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import KidsCategory from "./KidsCategory";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const allProducts = [...MenCategory, ...WomenCategory, ...KidsCategory];

  const filteredResults = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(value.trim() !== '');
  };

  const handleResultClick = (id, category) => {
    if (category === "Men") navigate(`/product/${id}`);
    else if (category === "Women") navigate(`/product-women/${id}`);
    else if (category === "Kids") navigate(`/product-kids/${id}`);
    setSearchTerm('');
    setShowResults(false);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>StyleSavvy</p>
      </div>

      <ul className="nav-menu">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        {showResults && (
          <div className="search-dropdown">
            {filteredResults.length === 0 ? (
              <p className="search-no-result">No products found</p>
            ) : (
              filteredResults.slice(0, 6).map((product) => (
                <div
                  key={product._id}
                  className="search-result-item"
                  onClick={() => handleResultClick(product._id, product.category)}
                >
                  <img src={product.img} alt={product.name} width={30} height={30} />
                  <span>{product.name}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="nav-login-cart">
        {user ? (
          <span style={{ marginRight: "10px", fontWeight: "bold" }}>{user.name}</span>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;