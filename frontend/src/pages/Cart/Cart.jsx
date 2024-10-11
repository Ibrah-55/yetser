import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { Storecontext } from "./../../Context/Storecontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

const Cart = () => {
  const {
    cartitems,
    food_list,
    removefromcart,
    gettotalcartamount,
    url,
    setcartitems,
  } = useContext(Storecontext);
  const navigate = useNavigate();

  // Calculate total quantity of items in the cart
  const totalItems = food_list.reduce(
    (acc, item) => acc + (cartitems[item._id] || 0),
    0
  );

  // Function to remove all quantities of a single item
  const clearItem = (itemId) => {
    setcartitems((prev) => {
      const newCart = { ...prev };
      delete newCart[itemId]; // Remove the entire item from cart
      localStorage.setItem("cart", JSON.stringify(newCart)); // Update localStorage
      return newCart;
    });
    toast.success("Item has been completely removed from the cart."); // Toast notification
  };

  return (
    <div className="cart">
      {totalItems === 0 ? (
        <div>
          <h2>Your cart is empty</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => navigate("/#explore-menu")}
              style={{
                backgroundColor: "orange",
                color: "green",
                height: "50px",
                width: "250px",
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item) => {
              if (cartitems[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.image} alt="" />
                      <p>{item.name}</p>
                      <p>Ksh{item.price}</p>
                      <p>{cartitems[item._id]}</p>
                      <p>Ksh{item.price * cartitems[item._id]}</p>
                      <div className="remove-options">
                        {/* Reduce quantity by one */}
                        <p
                          onClick={() => removefromcart(item._id)}
                          className="clear-item-btn"
                        >
                          X
                        </p>
                        {/* Remove entire item */}
                        <button
                          onClick={() => clearItem(item._id)}
                          className="cross"
                        >
                          Clear all
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>Ksh{gettotalcartamount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>Ksh{gettotalcartamount()}</b>
                </div>
              </div>

              <button
                onClick={() => navigate("/order")}
                style={{ backgroundColor: "green", color: "white" }}
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => navigate("/#explore-menu")}
                style={{
                  backgroundColor: "orange",
                  color: "green",
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
