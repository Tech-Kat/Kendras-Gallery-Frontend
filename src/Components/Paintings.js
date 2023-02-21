import axios from "axios";
import React, { useEffect, useState } from "react";
import Painting from "./Painting";


const API = process.env.REACT_APP_API_URL;
const Paintings = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/paintings`)
      .then((res) => {
        console.log(res);
        setPaintings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    
    <div className="index">
        
      <div className="cards">
        {paintings.map((painting) => {
          return <Painting key={painting.id} painting={painting} />;
        })}
      </div>
    </div>
  );
};

export default Paintings;
