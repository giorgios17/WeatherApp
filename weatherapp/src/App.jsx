/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputComponent from "./InputComponent";

function App() {
  const initialWeatherData = {
    time: "",
    city: "",
    country: "",
    data: null,
    weatherIcon: "",
    cityInfo: "",
    temperature: "",
    temperatureFeelslike: "",
    humidity: "",
  };
  
  const baseUrl = "http://api.weatherstack.com/current";
  const apiKey = "6a48543dab405dac14e0fb31ec90fcbe";
  
  const [weatherData, setWeatherData] = useState(initialWeatherData);
  
  useEffect(() => {
    fetch(`${baseUrl}?access_key=${apiKey}&query=Reggio-calabria`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const dataMeteo = json.current;
        const location = json.location;
        const newWeatherData = {
          time: dataMeteo.observation_time,
          cityInfo: location.name,
          humidity: dataMeteo.humidity,
          temperature: dataMeteo.temperature,
          temperatureFeelslike: dataMeteo.feelslike,
          country: location.country,
        };
        if (dataMeteo.weather_descriptions[0] === "Sunny") {
          newWeatherData.weatherIcon = "src/assets/img/sun_weather_icon.png";
        }
        setWeatherData(newWeatherData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container">
       {/*  <InputComponent setCity={setCity} /> */}
        <div className="row justify-content-center mt-5">
          <h1>{weatherData.time}</h1>
        </div>
        <div className="row align-items-center mt-4">
          <div className="col-12">
            <h2>
              {weatherData.cityInfo}, {weatherData.country}
            </h2>
          </div>
          <div>
            <img className="w-100" src={weatherData.weatherIcon} alt="" />
          </div>
        </div>
        <p>
          <span className="temperaturaAttuale">{weatherData.temperature}°</span> / temperatura percepita:{" "}
          {weatherData.temperatureFeelslike}°
        </p>
        <p>Umidità: {weatherData.humidity}%</p>
      </div>
    </>
  );
}

export default App;
