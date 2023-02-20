import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
import Pagination from "./Pagination";

const Footer = () => {
  return (
    <footer>
      <ul>
        <h2>
          <Link to="https://github.com/Tech-Kat">
            <img src={github} alt="git hub logo"></img>
          </Link>
        </h2>
      </ul>
      {/* <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div> */}
      <Pagination/>
    </footer>
  );
};

export default Footer;
