import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="header-title">Yetser</h2>
        <h2 className="header-subtitle">Unlock the Flavors of Freshness</h2>
        <p className="header-description">
          Imagination meets quality at Yetser, where our raw chicken is sourced
          from the finest farms to inspire your culinary creations. 
        </p>
        <a href="#explore-menu">
          <button className="explore-button">Explore Our Selection</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
