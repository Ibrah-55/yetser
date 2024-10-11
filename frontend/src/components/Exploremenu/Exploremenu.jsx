import React, { useState } from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({ category, setcategory }) => {
  // State to track the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the menu_list based on the search term
  const filteredMenu = menu_list.filter((item) =>
    item.menu_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="explore-menu-header">
        <h1 className="centered-text">Discover Freshness</h1>
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="menu-search-input"
        />
      </div>

      <p className="explore-menu-text">
        Discover premium cuts of raw chicken, sourced with care to inspire your
        next culinary masterpiece. Whether you’re planning a family feast or
        experimenting with new flavors, our selection ensures quality and
        freshness with every bite. Let your imagination run wild in the kitchen,
        and elevate your cooking experience like never before.
      </p>

      <div className="explore-menu-list">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="loading"
              />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
