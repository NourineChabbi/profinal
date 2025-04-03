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
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/shop">shop</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/men">men</Link>
        </li>
        <li> <Link style={{ textDecoration: 'none', color: '#333' }} to="/women">women</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#333' }} to="/kids">kids</Link>
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
