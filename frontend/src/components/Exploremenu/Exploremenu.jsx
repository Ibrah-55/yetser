import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
const Exploremenu = ({category, setcategory}) => {

  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="centered-text">Discover Fresh Flavors</h1>
      <p className="explore-menu-tex">
        Discover premium cuts of raw chicken, sourced with care to inspire your
        next culinary masterpiece. Whether you’re planning a family feast or
        experimenting with new flavors, our selection ensures quality and
        freshness with every bite. Let your imagination run wild in the kitchen,
        and elevate your cooking experience like never before.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
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
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Exploremenu
