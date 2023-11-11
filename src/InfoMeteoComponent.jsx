/* eslint-disable react/prop-types */
import React from "react";
import HourlyTempComponent from "./HourlyTempComponent";
import GiorniSuccessiviComponent from "./GiorniSuccessiviComponent";

function InfoMeteoComponent({ weatherData, forecastData }) {
  return (
    <>
      <div className="row justify-content-center mt-2" style={{ zIndex: "99" }}>
        <h1>{weatherData.time}</h1>
      </div>
      <div className="row align-items-center mt-2">
        <div className="col-12">
          <h4 className="text-light glass py-2">
            {weatherData.city}, {weatherData.country}
          </h4>
        </div>
        <div className="d-flex align-items-center justify-content-center py-2">
          <div className="d-flex align-items-center flex-column text-light glass p-2">
            <span className="temperaturaAttuale text-warning">
              {weatherData.temperature}°
            </span>
            <div>
              / percepita{" "}
              <span className="fw-bold">
                {weatherData.temperatureFeelslike}°
              </span>
            </div>
            <span className="small">
              Max.
              <span className="fw-bold">{forecastData[0].day.maxtemp_c}°</span>
              /Min.
              <span className="fw-bold">{forecastData[0].day.mintemp_c}°</span>
            </span>
            <span className="fw-bold" style={{ fontSize: "12px" }}>
              {weatherData.weatherDescription}
            </span>
          </div>
          <img className="weatherIcon" src={weatherData.weatherIcon} alt="" />
        </div>
      </div>
      <div className="mb-3 glass">
        <HourlyTempComponent forecastData={forecastData} />
      </div>
     <GiorniSuccessiviComponent forecastData={forecastData}/>
    </>
  );
}

export default InfoMeteoComponent;
