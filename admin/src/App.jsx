import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import Welcome from "./pages/welcome/welcome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url =
    "https://ba97-2c0f-2a80-10d1-e600-00-1002.ngrok-free.app" ||
    "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Welcome />} /> {/* Add the welcome route */}
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          {/* <Route path="/edit/:id" element={<Edit url={url} />} />{" "} */}
          {/* Add the edit route */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
