import React from "react";

function DettagliComponent({ weatherData, setMostraDettagli }) {
  return (
    <>
      <div className="container-dettagli">
        <h1>Dettagli:</h1>
        <div className="card" style={{width: "50%"}}>
          <img className="card-img-top" src="src/assets/img/wind.png" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            <span className="fw-bolder">Umidità:</span><br/> {weatherData.humidity}%
            </p>
          </div>
        </div>
        <div className="card" style={{width: "50%"}}>
          <img className="card-img-top" src="src/assets/img/rain_weather_icon.png" alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            <span className="fw-bolder">Precipitazioni:</span><br/> {weatherData.precip}%
            </p>
          </div>
        </div>
        <p>Indice UV: {weatherData.uvIndex}</p>
        <p>
          Direzione vento: {weatherData.windDegree}°/{weatherData.windDir}
        </p>
        <p>Vento: {weatherData.windSpeed}km/h</p>
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
