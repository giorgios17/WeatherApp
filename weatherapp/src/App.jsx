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
    visibility:"",
    windDegree:"",
    windDir:"",
    windSpeed:"",

  };
  const [mostraDettagli, setMostraDettagli] = useState(false);

  const [weatherData, setWeatherData] = useState(initialWeatherData);


  if (weatherData.city != "") {
    return (
      <>
        <div className="container">
          <InputComponent  setWeatherData={setWeatherData}/>
          <InfoMeteoComponent weatherData={weatherData}/>
          <button type="button" className="btn btn-warning fw-bolder" onClick={()=>setMostraDettagli(true)}>
            Mostra dettagli
          </button>
          {mostraDettagli && <DettagliComponent weatherData={weatherData} setMostraDettagli={setMostraDettagli}/>}
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
