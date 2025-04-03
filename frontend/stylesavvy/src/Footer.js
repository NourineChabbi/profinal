import React from 'react'
import './Footer.css'
import footer_logo from './Assests/logo.jpg'
import insta_icon from './Assests/insta_icon.png'
import facebook_icon from './Assests/facebook_icon.png'
import github_icon from './Assests/github_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>StyleSavvy</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social">
        <a href="https://www.instagram.com/ur___nourine_/" target="i" rel="noopener noreferrer">
        <img src={insta_icon} alt="" style={{width: "25px", height:"25px" , cursor:"pointer"}}/>
        </a>
        <a href="https://github.com/NourineChabbi" target="i" rel="noopener noreferrer">
        <img src={github_icon} alt="" style={{width: "25px", height:"25px" , cursor:"pointer"}}/>
        </a>
        <a href="https://www.facebook.com/nourine.chabbi.1" target="i" rel="noopener noreferrer">
        <img src={facebook_icon} alt="" style={{width: "30px", height:"30px", cursor:"pointer" }}/>
        </a>
      </div>
      <div className="footer-copyright">
      <hr/>
      <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
      </div>
  )
}

export default Footer
