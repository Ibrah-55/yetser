import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { Storecontext } from "./../../Context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitems, food_list, removefromcart, gettotalcartamount, url } =
    useContext(Storecontext);
  const navigate = useNavigate();

  // Calculate total quantity of items in the cart
  const totalItems = food_list.reduce(
    (acc, item) => acc + (cartitems[item._id] || 0),
    0
  );

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
              }} // Green background
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div> // Display this message if the cart is empty
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
                      <p
                        onClick={() => removefromcart(item._id)}
                        className="cross"
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null; // Return null if there are no items to display
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
                style={{ backgroundColor: "green", color: "white" }} // Green background for items present
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => navigate("/#explore-menu")}
                style={{
                  backgroundColor: "orange",
                  color: "green",
                }} // Green background
              >
                CONTINUE SHOPPING
              </button>
            </div>

            {/* Continue Shopping Button */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
