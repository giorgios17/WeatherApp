import React, { useState } from "react";
import config from "./config.json";

function InputComponent({ setWeatherData }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const baseUrl = "https://api.weatherapi.com/v1/current.json";
  const apiKey = config.apiKey;

  const handleCitySubmit = () => {
    const formattedCity = city.toLowerCase().replace(/\s+/g, "-");
    fetch(`${baseUrl}?key=${apiKey}&q=${formattedCity}&lang=it`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          if (json.error.code === 1006) {
            console.log("615 entro");
            setError(true);
            setErrorText("Inserisci una città valida");
          }
        } else {
          setError(false);
        }
        const dataMeteo = json.current;
        const location = json.location;
        const newWeatherData = {
          time: dataMeteo.observation_time,
          city: location.name,
          temperature: dataMeteo.temp_c,
          temperatureFeelslike: dataMeteo.feelslike_c,
          country: location.country,
          humidity: dataMeteo.humidity,
          precip: dataMeteo.precip_mm,
          uvIndex: dataMeteo.uv,
          visibility: dataMeteo.visibility,
          windDegree: dataMeteo.wind_degree,
          windDir: dataMeteo.wind_dir,
          windSpeed: dataMeteo.wind_kph,
        };
        if (dataMeteo.condition.text === "Soleggiato") {
          newWeatherData.weatherIcon = "https://i.postimg.cc/dQ2gr9hz/sun-weather-icon.png";
          newWeatherData.weatherDescription = dataMeteo.condition.text;
        } else if (dataMeteo.condition.text === "Parzialmente nuvoloso") {
          newWeatherData.weatherIcon = "https://i.postimg.cc/Dy5DYyd6/sunny-weather-icon.png";
          newWeatherData.weatherDescription = dataMeteo.condition.text;
        } else if (dataMeteo.condition.text === "Nuvoloso") {
          newWeatherData.weatherIcon = "https://i.postimg.cc/Dy5DYyd6/sunny-weather-icon.png";
          newWeatherData.weatherDescription = dataMeteo.condition.text;
        } else if (dataMeteo.condition.text === "Nebbia") {
          newWeatherData.weatherIcon =
            "https://i.postimg.cc/TPKZbMb9/foggy-cloud-weather-icon.png";
          newWeatherData.weatherDescription = dataMeteo.condition.text;
        } else if (dataMeteo.condition.text === "Sereno") {
          newWeatherData.weatherIcon = "https://i.postimg.cc/RhL8mMrM/moon-weather-icon.png";
          newWeatherData.weatherDescription = "Sereno";
        } else if (dataMeteo.condition.text.includes("Pio")) {
          newWeatherData.weatherIcon = "https://i.postimg.cc/bNqWT2bd/rain-weather-icon.png";
          newWeatherData.weatherDescription = dataMeteo.condition.text;
        }else{
          newWeatherData.weatherIcon = dataMeteo.condition.icon;
          newWeatherData.weatherDescription = dataMeteo.condition.text;
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
        placeholder="Inserisci una città..."
        value={city}
        onChange={handleInputChange}
      />
      {error && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ padding: "0" }}
        >
          {errorText}
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary mt-2 fw-bolder"
        onClick={handleCitySubmit}
      >
        Invia
      </button>
    </div>
  );
}

export default InputComponent;
