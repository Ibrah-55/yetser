import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartitems, addtocart, removefromcart, url } =
    useContext(Storecontext);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="food-item" onClick={() => navigate(`/food/${id}`)}>
      {" "}
      {/* Navigate to details page */}
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />
        {/* {!cartitems[id] ? (
          <img
            onClick={(e) => {
              e.stopPropagation();
              addtocart(id);
            }}
            src={assets.add_icon_white}
            alt=""
            className="add"
          />
        ) : (
          <div
            className="food-item-counter"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              onClick={() => removefromcart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartitems[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )} */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Ksh {price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
