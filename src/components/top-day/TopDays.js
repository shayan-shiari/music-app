import React, { useState, useEffect } from "react";
import { fetchApi } from "../../services/api";
import { Link } from "react-router-dom";
import TopDay from "./TopDay";
import "./top-day.css";

const TopDays = () => {
  const topDayUrl = "v1/song/top/day/0/100";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi(topDayUrl).then((res) => setData(res.results));
  }, []);
  return (
    <section className="tops">
      <h1>Top 10 Day Song</h1>
      <div className="all">
        {data.map((item, index) => (
          <Link target="_blank" to={`/music/${index + 1}`} key={index}>
            <TopDay
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

export default TopDays;
