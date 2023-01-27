import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../services/api";
import ReactPlayer from "react-player";
import "./detail.css";

const TopDetail = () => {
  const topDayUrl = "v1/song/top/day/0/100";
  const topWeekUrl = "v1/song/top/week/0/100";

  const { id } = useParams();
  const [dataDay, setDataDay] = useState([]);
  const [dataWeek, setDataWeek] = useState([]);
  const detail = id.includes("w")
    ? dataWeek[id.slice(0, id.length - 1) - 1]
    : dataDay[id - 1];
  console.log(detail?.id);
  console.log(detail);

  useEffect(() => {
    fetchApi(id.includes("w") ? topWeekUrl : topDayUrl).then((res) =>
      id.includes("w") ? setDataWeek(res.results) : setDataDay(res.results)
    );
  }, [id]);

  return (
    <section className="detail">
      <div
        className="background"
        style={{ backgroundImage: `url(${detail?.image.cover.url})` }}
      ></div>
      <div className="detail-content">
        <div>
          <img src={detail?.image.cover.url} alt="cover" />
        </div>
        <div className="main">
          <div className="sub-last">
            <h1>{detail?.title}</h1>
            <div className="singer">
              <div>
                <span>{detail?.artists[0].fullName}</span>
                <span>
                  dwonload:{detail?.artists[0].sumSongsDownloadsCount}
                </span>
              </div>
              <div className="music">
                <ReactPlayer
                  height={30}
                  playing={true}
                  controls
                  url={detail?.audio.high.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDetail;
