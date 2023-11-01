/* eslint-disable react/prop-types */
import React from "react";
import CardComponent from "./CardComponent";

function DettagliComponent({ weatherData, setMostraDettagli }) {
  return (
    <>
      <div className="container-dettagli py-5">
        <div className="row justify-content-center py-3">
          <CardComponent
            image={"src/assets/img/humidity_icon.png"}
            descrizione={"Umidità:"}
            valore={`${weatherData.humidity}%`}
          />
          <CardComponent
            image={"src/assets/img/rain_weather_icon.png"}
            descrizione={"Precipitazioni:"}
            valore={`${weatherData.precip}%`}
          />
          <CardComponent
            image={"src/assets/img/sun_weather_icon.png"}
            descrizione={"Indice UV:"}
            valore={weatherData.uvIndex}
          />
          <CardComponent
            image={"src/assets/img/wind.png"}
            descrizione={"Vento:"}
            valore={`${weatherData.windDegree}°/${weatherData.windDir} - ${weatherData.windSpeed}km/h`}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger fw-bolder buttonCloseDettagli"
          onClick={() => setMostraDettagli(false)}
        >
          X
        </button>
      </div>
    </>
  );
}

export default DettagliComponent;
