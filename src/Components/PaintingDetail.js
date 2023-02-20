import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const PaintingDetail = () => {
  const [details, setDetails] = useState([]);
//   const { name, artist, price, size, is_available, description, image } =
//     details;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/paintings/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

const deletePainting = () => {
    axios
      .delete(`${API}/paintings/${id}`)
      .then(() => {
        navigate(`/paintings`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deletePainting();
  };

  return (
    <article>
      <div className="card-info">
        <h1>{details.name}</h1>
        <img src={details.image} alt={details.name} height="200px" width="200px" />
        <h2>By:{details.artist}</h2>
        <h3>Inspiration: {details.description}</h3>
        <h1>P{details.size}</h1>
        <h2>{details.price}</h2>
        <h2>{details.is_available}</h2>
      </div>
      <div>
      <Link to={`/paintings`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/paintings/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          
      </div>
    </article>
  );
};

export default PaintingDetail;
