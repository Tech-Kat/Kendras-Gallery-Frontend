// import axios from "axios";

import React from "react";
import { Link } from "react-router-dom";
import colorfeather from "../assests/colorfeather.png"


const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img
          className="feather"
          src={colorfeather}
          alt="colorful feather"
        />
      </Link>

      <Link to="/paintings">
        <button className="nav-bttn">Gallery</button>
      </Link>

      <Link to="/paintings/new">
        <button className="nav-bttn">New Painting</button>
      </Link>
     
    </div>
  );
};

export default NavBar;
