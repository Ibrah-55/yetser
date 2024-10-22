import React from "react";
import "./Orders.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "./../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error("Error updating order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Error updating order status");
    }
  };

const deleteOrder = async (orderId) => {
  console.log("Attempting to delete order with ID:", orderId);
  try {
    const response = await axios.delete(`${url}/api/order/remove/${orderId}`); // Ensure URL matches
    console.log("Response:", response);
    if (response.data.success) {
      toast.success("Order deleted successfully");
      await fetchAllOrders(); // Refresh the list after deletion
    } else {
      toast.error("Error deleting order");
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    toast.error("Error deleting order");
  }
};


  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Ksh {order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Processing">Processing</option>
              <option value="On transit">On transit</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
            <p
              className="delete-button"
              onClick={() => deleteOrder(order._id)}
            >
              Delete Order
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
