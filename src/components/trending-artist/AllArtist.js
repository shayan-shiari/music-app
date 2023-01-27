import React, { useState, useEffect } from "react";
import { fetchApi } from "../../services/api";
import Artist from "./Artist";
import "./artist.css";

const AllArtist = () => {
  const artistUrl = "v1/artist/trending/0/4";
  const [data, setData] = useState([]);

  // get data
  useEffect(() => {
    fetchApi(artistUrl).then((res) => setData(res.results));
  }, []);

  return (
    <section className="all-artist">
    <h1>Trending Artists</h1>
      <div className="all">
        {data.map((item) => (
          <Artist key={item.id} name={item.fullName} image={item.image.cover.url} />
        ))}
      </div>
    </section>
  );
};

export default AllArtist;
