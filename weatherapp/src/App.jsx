/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputComponent from "./InputComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
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
    humidity: "",
    weatherDescription: "",
  };
  const [weatherData, setWeatherData] = useState(initialWeatherData);


  if (weatherData.city != "") {
    return (
      <>
        <div className="container">
          <InputComponent  setWeatherData={setWeatherData}/>
          <InfoMeteoComponent weatherData={weatherData}/>
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
