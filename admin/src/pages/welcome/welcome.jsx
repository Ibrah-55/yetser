// src/pages/welcome/Welcome.js
import React, { useEffect, useState } from "react";

import "./welcome.css"; // Optional: If you want to add specific styles
import { BeatLoader, PropagateLoader } from "react-spinners";

const Welcome = ({ onComponentChange }) => {
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(true); // State to control button visibility

  const handleClick = () => {
    setShowButton(false); // Hide the button after it's clicked
     setMessage(
       <>
         Checking if you are allowed to access the page{" "}
         <BeatLoader color="#945025" />{" "}
       </>
     );

    // Show the initial checking message for 2 seconds
    const timer1 = setTimeout(() => {
      setMessage("Access granted. Note: Allowed  only in development"); // Change to allowed message
    }, 3000);
    const timer3 = setTimeout(() => {
      setMessage(
        <>
          Redirecting... <br /> <br />{" "}
          <PropagateLoader color="#EC7224" size={25} speedMultiplier={1} />
        </>
      );
      // Change to allowed message
    }, 5000);

    // After 5 seconds, call the function to hide this component and show others
    const timer2 = setTimeout(() => {
      onComponentChange(); // Call the function to hide this component and show others
    }, 9000);

    // Cleanup timers
    return () => {
      clearTimeout(timer3);

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
        <button className="button" onClick={handleClick}>
          Request Access
        </button>
      ) : (
        <h3>{message}</h3>
      )}{" "}
    </div>
  );
};

export default Welcome;
