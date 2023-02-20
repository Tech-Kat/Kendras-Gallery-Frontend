import React from "react";
import { Link } from "react-router-dom";

const Painting = ({ painting }) => {
  return (
    <div>
      <div className="one-card">
        <Link to={`/paintings/${painting.id}`}>
          <img
            className="pic-img"
            src={painting.image}
            alt={`${painting.name} img`}
            width="150px"
          />
        </Link>
        <br />
        <div className="index-info">
          <br />
          <h3> {painting.name} </h3>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Painting;
