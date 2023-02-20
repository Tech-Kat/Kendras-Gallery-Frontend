import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const NewPainting = () => {
  let navigate = useNavigate();

  const addPainting = (newPainting) => {
    axios
      .post(`${API}/paintings`, newPainting)
      .then(
        () => {
          navigate(`/paintings`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [newP, setNewP] = useState({
    name: "",
    artist: "",
    size: "",
    price: "",
    is_available: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setNewP({ ...newP, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewP({ ...newP, is_available: !newP.is_available });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPainting(newP);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Painting Name</label>
        <input
          id="name"
          value={newP.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Painting"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={newP.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="text"
          name="size"
          value={newP.size}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          name="price"
          value={newP.price}
          onChange={handleTextChange}
        />
        <label htmlFor="is_available">Available:</label>
        <input
          id="is_available"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newP.is_available}
        />

        <label htmlFor="image">image:</label>
        <input
          id="image"
          type="text"
          onChange={handleTextChange}
          value={newP.image}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewPainting;
