import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Storecontext } from "../../Context/Storecontext";
import { ToastContainer, toast } from "react-toastify"; // Correct import
import "react-toastify/dist/ReactToastify.css";
import "./FoodDescription.css";

const FoodDescription = () => {
  const { id } = useParams();
  const { food_list, cartitems, addtocart, removefromcart, url } =
    useContext(Storecontext);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const foodItem = food_list.find((item) => item._id === id);
  if (!foodItem) return <p>Item not found</p>;

  const similarProducts = food_list.filter(
    (item) => item.category === foodItem.category && item._id !== id
  );

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const totalQuantityInCart = cartitems[foodItem._id] || 0;

const notifyAdd = (item, qty) => {
  toast.success(
    <>
      <span style={{ color: "#80421C" }}>{qty}</span>{" "}
      <span style={{ color: "#EC7224" }}>{item}</span> added to cart!
    </>,
    {
      position: "bottom-right",
    }
  );
};

const notifyRemove = (item) => {
  toast.info(
    <>
      1 piece <span style={{ color: "#EC7224" }}>{item}</span> removed from
      cart!
    </>,
    {
      position: "bottom-right",
    }
  );
};


  return (
    <div className="outer-container">
      <div className="content-container">
        <div className="food-details">
          <img
            className="food-image"
            src={`${url}/images/${foodItem.image}`}
            alt={foodItem.name}
          />
          <div className="food-info">
            <h3 className="food-title">{foodItem.name}</h3>
            <p className="food-description-text">{foodItem.description}</p>
            <p className="food-price">Price: @ Ksh {foodItem.price}</p>
            <p className="total-quantity">
              Total <i className="itemsname"> {foodItem.name}</i> in Cart: {totalQuantityInCart}
            </p>
            Pieces:{" "}
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="quantity-input"
            />
            <div className="cart-actions">
              <button
                className="add-to-cart"
                onClick={() => {
                  addtocart(foodItem._id, quantity);
                  notifyAdd(foodItem.name, quantity);
                }}
              >
                Add to Cart
              </button>
              {totalQuantityInCart > 0 && (
                <button
                  className="remove-from-cart"
                  onClick={() => {
                    removefromcart(foodItem._id);
                    notifyRemove(foodItem.name);
                  }}
                >
Remove
                </button>
              )}
            </div>
            <div className="action-buttons">
              <button
                className="continue-shopping"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="checkout"
                onClick={() => navigate("/order")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        <h3 className="similar-products-title">Similar Products</h3>
        <div className="similar-products">
          {similarProducts.map((similar) => (
            <div
              key={similar._id}
              className="similar-product-item"
              onClick={() => navigate(`/food/${similar._id}`)}
            >
              <img
                className="similar-product-image"
                src={`${url}/images/${similar.image}`}
                alt={similar.name}
              />
              <p className="similar-product-name">{similar.name}</p>
              <p className="similar-product-price">@ Ksh {" "}
                {similar.price}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodDescription;
