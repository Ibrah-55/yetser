import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartitems, setcartitems] = useState({});
const url =
  " https://9b3f-2c0f-2a80-10d1-e600-00-1002.ngrok-free.app" ||
  "http://localhost:4000";
  const [token, settoken] = useState("");
  const [food_list, setfoodlist] = useState([]);

  const addtocart = async (itemId, quantity) => {
    setcartitems((prev) => {
      const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + quantity };
      // Store updated cart in local storage
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

const removefromcart = async (itemId) => {
  // Decrement item quantity in the cart
  setcartitems((prev) => {
    const newCart = { ...prev };
    if (newCart[itemId] > 1) {
      newCart[itemId] -= 1; // Decrease the count
      // Toast notification for item removed
     
    } else {
      // Notify the user that the item is removed entirely
      
      delete newCart[itemId]; // Remove the item if count is 0
    }
    // Store updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  });

  // Remove from server if there's a token
  if (token) {
    try {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
      // Optionally notify the user of a failure
    }
  }
};

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };

  const fetchfoodlist = async () => {
    const response = await axios.get(url + "/api/food/list");
    setfoodlist(response.data.data);
    console.log("Data: ", response.data);
  };

  const loadcartdata = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setcartitems(response.data.cartData);
  };

  // Load cart items from local storage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setcartitems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    async function loaddata() {
      await fetchfoodlist();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
        await loadcartdata(localStorage.getItem("token"));
      }
    }
    loaddata();
  }, []);

  const contextvalue = {
    food_list,
    cartitems,
    setcartitems,
    addtocart,
    removefromcart,
    gettotalcartamount,
    url,
    token,
    settoken,
  };

  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
