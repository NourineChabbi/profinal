import React from 'react'
import './Shop.css'
import hand_icon from './Assests/hand_icon.png'
import hero_image from './Assests/hero_image.jpg'
function Shop() {
  return (
    <div>
        <div className='hero'>
                <div>
                <div className="hero-left">
                <h2 className="h">NEW ARRIVALS ONLY</h2>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" className="hand-icon" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                    <div className="hero-latest-btn">
                    <div className="hero-latest-btn" onClick={() => document.getElementById("popular-women").scrollIntoView({behavior:"smooth"})}>Latest Collection</div>
                </div>
                </div>
              </div>
              <div className="hero-right">
                <img src={hero_image} alt=""/>
              </div>
            </div>
        </div>
  )
}

export default Shop
