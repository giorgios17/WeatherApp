/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputComponent from "./InputComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import DettagliComponent from "./DettagliComponent";
import config from "./config.json";

function App() {
  const initialWeatherData = {
    time: "",
    city: "",
    country: "",
    data: null,
    weatherIcon: "",
    temperature: "",
    temperatureFeelslike: "",
    weatherDescription: "",
    humidity: "",
    precip: "",
    uvIndex: "",
    visibility: "",
    windDegree: "",
    windDir: "",
    windSpeed: "",
  };
 /*  const [mostraDettagli, setMostraDettagli] = useState(false); */
  const [postitionContainerDettagli, setPostitionContainerDettagli] = useState("100%");
  const [weatherData, setWeatherData] = useState(initialWeatherData);

  if (weatherData.city != "") {
    return (
      <>
        <div className="container">
          <InputComponent setWeatherData={setWeatherData} />
          <InfoMeteoComponent weatherData={weatherData} />
          <button
            type="button"
            className="btn text-light glass fw-bolder"
            onClick={() => setPostitionContainerDettagli("0")}
          >
            Mostra dettagli
          </button>
          <div className="container-dettagli py-5" style={{left:postitionContainerDettagli}}>
              <DettagliComponent
                weatherData={weatherData}
                setPostitionContainerDettagli={setPostitionContainerDettagli}
              />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <InputComponent setWeatherData={setWeatherData} />
        </div>
      </>
    );
  }
}

export default App;
