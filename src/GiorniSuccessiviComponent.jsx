import React from "react";

function GiorniSuccessiviComponent({ forecastData }) {
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const returnDay = (dataTemp) => {
    dataTemp = new Date(dataTemp);
    return giorniSettimana[dataTemp.getDay()];
  };
  return (
    <>
      <div className="containerMeteoGiorniSuccessivi text-light glass mb-2 py-2 px-4">
        {forecastData.map((element, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <div key={index} className="d-flex justify-content-around align-items-center">
              <p
                style={{
                  margin: "0",
                  width: "35%",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {returnDay(element.date)}
              </p>
              <div style={{ width: "20%" }}>
                <img
                  src="https://i.postimg.cc/tg88tStH/humidity-icon.png"
                  alt="humidity-icon"
                  style={{ width: "25px", height: "25px" }}
                />
                <span>{element.day.avghumidity}%</span>
              </div>
              <div style={{ width: "20%" }}>
                <img
                  src={element.day.condition.icon}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <p style={{ width: "25%", margin: "0", textAlign: "right", fontWeight:"bold" }}>
                {element.day.maxtemp_c}°/{element.day.mintemp_c}°
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GiorniSuccessiviComponent;
