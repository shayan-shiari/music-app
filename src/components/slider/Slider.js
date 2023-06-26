import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "./slider.css";
import Slide from "./Slide";
import { fetchApi } from "../../services/api";

const Slider = () => {
  const [data, setData] = useState([]);
  const sliderUrl = "v1/song/slider/latest";

  useEffect(() => {
    fetchApi(sliderUrl).then((response) => setData(response.results));
  }, []);

  return (
    <section>
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link target="_blank" to={`/last-detail/${index + 1}`}>
              <Slide image={item.image.slider} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
