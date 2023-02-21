import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const Search = () => {
    let {id} = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
      axios.get(`/${API}/paintings/${search}`)
      .then((res) => {
        setData(res.data);
        navigate(`/paintings`);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [navigate, id, search])
    

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filtered = !search
    ? data.name || data.artist
    : data.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
<div>

<input type="text" value={search} onChange={handleSearchChange} />

{filtered?.map((f) => {
        return (
            <div key={f.id}>
            <div className="one-card">
              <Link to={`/paintings/${f.id}`}>
                <img
                  className="pic-img"
                  src={f.image}
                  alt={`${f.name} img`}
                  width="150px"
                />
              </Link>
              <br />
              <div className="index-info">
                <br />
                <h3> {f.name} </h3>
                <br />
              </div>
            </div>
          </div>
        )
        })}
</div>

    )
}

export default Search;