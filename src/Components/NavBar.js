// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import feather from "../assets/feather.png";

// const API = process.env.REACT_APP_API_URL;
const NavBar = () => {
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    // .get(`/${API}/paintings/${search}`)
    // .then((data) => {
    //     console.log(data, "data")
    //     setSearch()
  };

  return (
    <div className="nav">
      <Link to="/paintings">
        <img
          className="feather"
          src="https://i.pngimg.me/thumb/f/720/comhiclipartiifix.jpg"
          alt="colorful feather"
        />
      </Link>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/paintings/new">
        <button>New Painting</button>
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={handleChange}
            value={search}
          />
          <input id="paint brush" type="submit" value="" />
        </div>
      </form>

      {/* <ul>
        {data.map(())}
      </ul> */}
    </div>
  );
};

export default NavBar;
