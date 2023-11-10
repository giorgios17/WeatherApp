/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputComponent from "./InputComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import DettagliMobileComponent from "./DettagliMobileComponent";
import DettagliDesktopComponent from "./DettagliDesktopComponent";
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

  const [postitionContainerDettagli, setPostitionContainerDettagli] =
    useState("100%");
  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [forecastData, setForecastData] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (weatherData.city != "") {
    return (
      <>
        <div className="container-app">
          <img className="logo mb-2" src="./assets/img/logo1.png" alt="logo" />
          <InputComponent
            setWeatherData={setWeatherData}
            setForecastData={setForecastData}
            setShowComponent={setShowComponent}
          />
          <div className={`opacity-transition ${showComponent ? "show" : ""}`}>
            <InfoMeteoComponent
              weatherData={weatherData}
              forecastData={forecastData}
            />
            {width < breakpoint && (
              <button
                type="button"
                className="btn text-light glass fw-bolder"
                onClick={() => setPostitionContainerDettagli("0")}
              >
                Mostra dettagli
              </button>
            )}
            {width > breakpoint && (
             <DettagliDesktopComponent weatherData={weatherData}/>
            )}

          </div>
        </div>
        <div
          className="container-dettagli py-5"
          style={{ left: postitionContainerDettagli }}
        >
          <DettagliMobileComponent
            weatherData={weatherData}
            setPostitionContainerDettagli={setPostitionContainerDettagli}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container-app">
          <div className="transitionFadeIn">
            <img
              className="logo mb-2"
              src="./assets/img/logo1.png"
              alt="logo"
            />
            <InputComponent
              setWeatherData={setWeatherData}
              setForecastData={setForecastData}
              setShowComponent={setShowComponent}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
