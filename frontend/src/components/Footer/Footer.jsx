import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="fot-logo" src={assets.logo} alt="" />
          <p className="header-description">
            At Yetser, we believe every meal tells a story. Elevate your
            culinary journey with our premium raw chicken.
          </p>

          <div className="footer-social-icons">
            <a href="#" target="_blank">
              <img src={assets.linkedin_icon} alt="" />
            </a>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Yetser</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254724492585</li>
            <li>yetser@company.org</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Yetser - All rights Reserved.
      </p>
    </div>
  );
}

export default Footer
