import React from 'react'
import './Navbar.css'
import logo from './Assests/logo.jpg'
import cart_icon from './Assests/cart_icon.png'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>StyleSavvy</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/shop">Shop</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/men">Men</Link>
        </li>
        <li> <Link style={{ textDecoration: 'none', color: '#333' }} to="/women">Women</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
