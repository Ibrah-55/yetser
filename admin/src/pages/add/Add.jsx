import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "", // Default to empty or other placeholder
  });

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  const onsubmithandler = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category); // This should now capture the correct category
    formdata.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formdata);
    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "", // Reset category to empty on success
      });
      setimage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onsubmithandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangehandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="product name"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangehandler}
            value={data.description}
            name="description"
            rows="6"
            required
            placeholder="Product description"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangehandler}
              name="category"
              value={data.category} // Bind value to the current state
              required
            >
              <option value="" disabled required>
                Select category
              </option>
              <option value="Whole chicken">Whole chicken</option>
              <option value="Wings">Wings</option>
              <option value="Thigh">Thigh</option>
              <option value="Drumstick">Drumstick</option>
              <option value="Breast">Breast</option>
              <option value="Gizzard">Gizzard</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangehandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Ksh 100"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
