import React, { useContext, useState } from "react";
import "./Placeorder.css";
import { Storecontext } from "../../Context/Storecontext";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Placeorder = () => {
  const { gettotalcartamount, token, food_list, cartitems, url, setcartitems } =
    useContext(Storecontext);
  const navigate = useNavigate(); // Use useNavigate hook for redirection

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
    altPhone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

const placeorder = async (event) => {
  event.preventDefault();

  // Calculate total quantity of items in the cart
  const totalItems = food_list.reduce(
    (acc, item) => acc + (cartitems[item._id] || 0),
    0
  );

  // If there are no items in the cart, show an alert and stop the order submission
  if (totalItems === 0) {
    alert("No items in the cart. Please add items before placing an order.");
    navigate("/#explore-menu"); // Redirect to cart page on failure

    return; // Stop further execution
  }

  let orderitems = [];
  food_list.map((item) => {
    if (cartitems[item._id] > 0) {
      let iteminfo = item;
      iteminfo["quantity"] = cartitems[item._id];
      orderitems.push(iteminfo);
    }
  });

  let orderdata = {
    address: data,
    items: orderitems,
    amount: gettotalcartamount() + 2,
  };

  try {
    let response = await axios.post(`${url}/api/order/place`, orderdata, {
      headers: { token },
    });
    if (response.data.success) {
      alert("Order successfully placed!");

      // Clear the cart after successful order placement
      setcartitems({});

      // Redirect to home page
      navigate("/");
    } else {
      alert("Error placing the order!");
      navigate("/cart"); // Redirect to cart page on failure
    }
  } catch (error) {
    console.error(error);
    alert("Error placing the order!");
    navigate("/cart"); // Redirect to cart page on failure
  }
};


  return (
    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          placeholder="Email address"
        />
        <input
          name="city"
          onChange={onChangeHandler}
          value={data.city}
          type="text"
          placeholder="City"
        />
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
        <input
          name="altPhone"
          onChange={onChangeHandler}
          value={data.altPhone}
          type="text"
          placeholder="Alternative Phone (optional)"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ksh {gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Ksh {gettotalcartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Ksh {gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">CONFIRM ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
