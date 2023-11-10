import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";

function SwiperComponent({ forecastData }) {
  let elementsRendered = 0;
  const now = new Date();
  now.setMinutes(0);
  // converto la stringa data ed estraggo l'ora
  const converToHour = (date) => {
    const data = new Date(date);
    const orario = data.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return orario;
  };
  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      breakpoints: {
        100:{
          slidesPerView: 5,
        },
        576: {
          slidesPerView: 7,
        },
        768: {
          slidesPerView: 10,
        },
        1024: {
          slidesPerView: 12,
        },
        1200: {
          slidesPerView: 15,
        },
      },
      navigation:"true",
      injectStyles: [
        `
          .swiper-button-next {
            right:0;
          }
          .swiper-button-prev{
            left:0;
          }
          `,
      ],
    };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <swiper-container init="false" ref={swiperRef}>
        {[...forecastData[0].hour, ...forecastData[1].hour]
          .filter((element) => {
            const elementTime = new Date(element.time);
            elementTime.setMinutes(0);
            return elementTime >= now;
          })
          .slice(0, 24)
          .map((element, index) => (
            <swiper-slide key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="text-secondary">
                  {converToHour(element.time)}
                </span>
                <img
                  src={element.condition.icon}
                  style={{
                    width: "64px",
                    marginTop: "-5px",
                    marginBottom: "-5px",
                  }}
                />
                <span className="fw-bold text-light">{element.temp_c}°</span>
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </>
  );
}

export default SwiperComponent;
