// src/App.js
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./pages/welcome/welcome";
import Welcome2 from "./pages/welcome/Welcome2";

const App = () => {
  const url =
    "https://ba97-2c0f-2a80-10d1-e600-00-1002.ngrok-free.app" ||
    "http://localhost:4000";

  const [showWelcome, setShowWelcome] = useState(true); // State to control the visibility of the Welcome component

  const handleComponentChange = () => {
    setShowWelcome(false); // Hide the Welcome component when the button is clicked
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        {showWelcome ? (
          <Welcome onComponentChange={handleComponentChange} /> // Show Welcome component
        ) : (
          <>
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              <Route path="/" element={<Welcome2 />} />{" "}
              {/* Optional: If you want to keep the welcome route */}
            </Routes>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
