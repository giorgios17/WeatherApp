/* eslint-disable react/prop-types */
import React from 'react'

function InfoMeteoComponent({weatherData}) {
  return (
    <>
    <div className="row justify-content-center mt-2" style={{zIndex: "99"}}>
            <h1>{weatherData.time}</h1>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-12">
              <h2 className='text-light glass py-2'>
                {weatherData.city}, {weatherData.country}
              </h2>
            </div>
            <div>
              <img className="weatherIcon" src={weatherData.weatherIcon} alt="" />
            </div>
            <p className="fw-bold">
              {weatherData.weatherDescription}
            </p>
          </div>
          <p>
            <span className="temperaturaAttuale text-warning">
              {weatherData.temperature}°
            </span>
            / temperatura percepita: {weatherData.temperatureFeelslike}°
          </p>
    </>
  )
}

export default InfoMeteoComponent