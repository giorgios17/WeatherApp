import React, { useState } from 'react';
import config from "./config.json";

function InputComponent({ setWeatherData }) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const baseUrl = "http://api.weatherstack.com/current";
  const apiKey = config.apiKey;

  const handleCitySubmit = () => {
    const formattedCity = city.toLowerCase().replace(/\s+/g, '-');
    fetch(`${baseUrl}?access_key=${apiKey}&query=${formattedCity}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          const dataMeteo = json.current;
          const location = json.location;
          const newWeatherData = {
            time: dataMeteo.observation_time,
            city: location.name,
            humidity: dataMeteo.humidity,
            temperature: dataMeteo.temperature,
            temperatureFeelslike: dataMeteo.feelslike,
            country: location.country,
          };
          if (dataMeteo.weather_descriptions[0] === "Sunny") {
            newWeatherData.weatherIcon = "src/assets/img/sun_weather_icon.png";
            newWeatherData.weatherDescription = "Soleggiato";
          } else if (dataMeteo.weather_descriptions[0] === "Overcast") {
            newWeatherData.weatherIcon =
              "src/assets/img/sunny_weather_icon.png";
            newWeatherData.weatherDescription = "Nuvoloso";
          }
          setWeatherData(newWeatherData);
        })
        .catch((error) => console.error(error));
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Città"
        value={city}
        onChange={handleInputChange}
      />
      <button type="button" className="btn btn-warning mt-2 fw-bolder" onClick={handleCitySubmit}>
        Invia
      </button>
    </div>
  );
}

export default InputComponent;