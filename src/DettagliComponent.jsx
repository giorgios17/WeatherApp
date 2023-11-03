/* eslint-disable react/prop-types */
import React from "react";
import CardComponent from "./CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function DettagliComponent({ weatherData, setPostitionContainerDettagli }) {
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
      <FontAwesomeIcon
        icon={faCircleXmark}
        size="2xl"
        className="buttonCloseDettagli"
        style={{ color: "#d81818" }}
        onClick={() => setPostitionContainerDettagli("100%")}
      />
    </>
  );
}

export default DettagliComponent;
