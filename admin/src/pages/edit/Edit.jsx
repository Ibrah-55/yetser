import React, { useEffect, useState } from "react";
import "./Edit.css"; // Add your CSS file for styling
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = ({ url }) => {
  const { id } = useParams(); // Get the item ID from the URL parameters
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${url}/api/food/${id}`);
        if (response.data.success) {
          setItem(response.data.data);
        } else {
          toast.error("Error fetching items data");
        }
      } catch (error) {
        toast.error("Error fetching item data");
      }
    };
    fetchItem();
  }, [id, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setItem((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("category", item.category);
    formData.append("price", item.price);
    formData.append("image", item.image);

    try {
      const response = await axios.put(`${url}/api/food/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success("Item updated successfully");
        navigate("/list"); // Navigate back to the list page
      } else {
        toast.error("Error updating item");
      }
    } catch (error) {
      toast.error("Error updating item");
    }
  };

  return (
    <div className="edit flex-col">
      <h2>Edit Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default Edit;
