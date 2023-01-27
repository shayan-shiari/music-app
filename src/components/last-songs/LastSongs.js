import React, { useState, useEffect } from "react";
import { fetchApi } from "../../services/api";
import LastSong from "./LastSong";
import { Link } from "react-router-dom";
import "./last-song.css";

const LastSongs = () => {
  const songUrl = "v1/song/new/0/11";
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetchApi(songUrl).then((res) => setData(res.results));
  }, []);
  return (
    <section className="all-last-songs">
      <h1>Last Songs</h1>
      <div className="all">
        {data.map((item,index) => (
          <Link target="_blank" to={`last-detail/${index + 10}`} key={item.id}>
            <LastSong
              title={item.title}
              image={item.image.cover.url}
              artist={item.artists[0].fullName}
              play={item.artists[0].sumSongsDownloadsCount}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LastSongs;
