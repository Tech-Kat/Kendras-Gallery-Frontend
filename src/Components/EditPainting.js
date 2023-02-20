import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const EditPainting = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [edit, setEdit] = useState({
    name: "",
    artist: "",
    size: "",
    price: "",
    is_available:false,
    image: "",
  });

  const updatePainting = (updatedPainting) => {
    axios
      .put(`${API}/paintings/${id}`, updatedPainting)
      .then(
        () => {
          navigate(`/paintings/${id}`);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setEdit({ ...edit, is_available: !edit.is_available });
  };

  useEffect(() => {
    axios
      .get(`${API}/paintings/${id}`)
      .then(
        (res) => setEdit(res.data),
        (error) => navigate(`/not-found`)
      )
      .catch((c) => console.warn("catch", c));
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePainting(edit, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Painting Name:</label>
        <input
          id="name"
          value={edit.name}
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
          value={edit.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="text"
          name="size"
          value={edit.size}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={edit.price}
          onChange={handleTextChange}
        />
        <label htmlFor="is_available">Available:</label>
        <input
          id="is_available"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={edit.is_available}
        />
        <label htmlFor="image">image:</label>
        <input
          id="image"
          type="text"
          onChange={handleTextChange}
          value={edit.image}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/paintings/${id}`}>
        <button>scratch</button>
      </Link>
    </div>
  );
}

export default EditPainting;
