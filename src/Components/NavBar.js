// import axios from "axios";

import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import colorfeather from "../assets/colorfeather.png"


const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/paintings">
        <img
          className="feather"
          src={colorfeather}
          alt="colorful feather"
        />
      </Link>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/paintings/new">
        <button>New Painting</button>
      </Link>
      <Search/>
    </div>
  );
};

export default NavBar;
