import React, { useState } from "react";
import "./Appdownload.css";
import { assets } from "./../../assets/assets";

const Appdownload = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Yetser App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <div
          className="app-store-container"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <img src={assets.app_store} alt="App Store" />
          {showTooltip && <div className="tooltip">Coming Soon</div>}
        </div>
      </div>
    </div>
  );
};

export default Appdownload;
