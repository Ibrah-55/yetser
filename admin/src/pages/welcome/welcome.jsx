// src/pages/welcome/Welcome.js
import React, { useEffect, useState } from "react";

import "./welcome.css"; // Optional: If you want to add specific styles

const Welcome = ({ onComponentChange }) => {
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(true); // State to control button visibility

  const handleClick = () => {
    setShowButton(false); // Hide the button after it's clicked
    setMessage("Checking if you are allowed to access the page...");

    // Show the initial checking message for 2 seconds
    const timer1 = setTimeout(() => {
      setMessage("Allowed  only in development"); // Change to allowed message
    }, 4000);

    // After 5 seconds, call the function to hide this component and show others
    const timer2 = setTimeout(() => {
      onComponentChange(); // Call the function to hide this component and show others
    }, 7000);

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };
  return (
    <div className="welcome-container">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Your management hub for overseeing the platform.</p>
      <p>
        Sorry, you do not have the necessary privileges to access this page.
      </p>
      <br />
      {showButton ? ( // Conditional rendering of the button
        <button className="button" onClick={handleClick}>Request Acess</button>
      ) : (
        <h3 >{message}</h3>
      )}{" "}
    </div>
  );
};

export default Welcome;
