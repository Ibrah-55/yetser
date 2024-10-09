import React, { useContext } from "react";
import "./Fooddisplay.css";
import { Storecontext } from "../../Context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  // Debugging logs
  console.log("Food list: ", food_list); // Check if food_list is populated
  console.log("Selected category: ", category); // Check if the category is passed correctly

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list && food_list.length > 0 ? (
          food_list.map((item, index) => {
            // Display items that match the selected category or show all if "All" is selected
            if (category === "All" || category === item.category) {
              return (
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; // Skip items that don't match the selected category
          })
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default Fooddisplay;
