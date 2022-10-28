import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/book/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        placeholder="cover"
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="price"
        onChange={handleChange}
      />
      <button className="form-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Update;
