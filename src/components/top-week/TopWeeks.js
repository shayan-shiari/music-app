import React, { useState, useEffect } from "react";
import { fetchApi } from "../../services/api";
import { Link } from "react-router-dom";
import TopWeek from "./TopWeek";

const TopWeeks = () => {
    const topWeekUrl = "v1/song/top/week/0/100";
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchApi(topWeekUrl).then((res) => setData(res.results));
    }, []);
    return (
      <section className="tops">
        <h1>Top 10 Week Song</h1>
        <div className="all">
          {data.map((item, index) => (
            <Link target="_blank" to={`/music/${index +1}w`} key={index}>
              <TopWeek
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

export default TopWeeks;