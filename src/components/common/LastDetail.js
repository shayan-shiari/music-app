import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../services/api";
import ReactPlayer from "react-player";
import "./detail.css";

const LastDetail = () => {
  const sliderUrl = "v1/song/slider/latest";
  const songUrl = "v1/song/new/0/11";
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  const detail = id > 7 ?  data[id - 10] : data[id - 1];

  useEffect(() => {
    fetchApi(id >7 ? songUrl : sliderUrl).then((res) => setData(res.results));
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

export default LastDetail;
