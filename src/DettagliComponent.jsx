/* eslint-disable react/prop-types */
import React from "react";
import CardComponent from "./CardComponent";

function DettagliComponent({ weatherData,setPostitionContainerDettagli }) {
  return (
    <>
      
        <div className="row justify-content-center py-3">
          <CardComponent
            image={"https://i.postimg.cc/tg88tStH/humidity-icon.png"}
            descrizione={"Umidità:"}
            valore={`${weatherData.humidity}%`}
          />
          <CardComponent
            image={"https://i.postimg.cc/bNqWT2bd/rain-weather-icon.png"}
            descrizione={"Precipitazioni:"}
            valore={`${weatherData.precip} mm`}
          />
          <CardComponent
            image={"https://i.postimg.cc/dQ2gr9hz/sun-weather-icon.png"}
            descrizione={"Indice UV:"}
            valore={weatherData.uvIndex}
          />
          <CardComponent
            image={"https://i.postimg.cc/fRrPD2P0/wind.png"}
            descrizione={"Vento:"}
            valore={`${weatherData.windDegree}°/${weatherData.windDir} - ${weatherData.windSpeed}km/h`}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger fw-bolder buttonCloseDettagli"
          onClick={() => setPostitionContainerDettagli("100%")}
        >
          X
        </button>
    </>
  );
}

export default DettagliComponent;
