import React from "react";
import CardComponent from "./CardComponent";

function DettagliDesktopComponent({ weatherData, forecastData }) {
  function convertiFormato24Ore(oraAMPM) {
    let data = new Date("2000-01-01 " + oraAMPM); 
    let ora24 = data.getHours();
    let minuti = data.getMinutes();
  
    let ora24Formattata = ora24 < 10 ? "0" + ora24 : ora24;
  
    let minutiFormattati = minuti < 10 ? "0" + minuti : minuti;
  
    return ora24Formattata + ":" + minutiFormattati;
  }
  
  return (
    <>
      <div className="row justify-content-center py-3">
        <CardComponent
          image={"https://i.postimg.cc/tg88tStH/humidity-icon.png"}
          descrizione={"Umidità"}
          valore={`${weatherData.humidity}%`}
        />
        <CardComponent
          image={"https://i.postimg.cc/bNqWT2bd/rain-weather-icon.png"}
          descrizione={"Precipitazioni"}
          valore={`${weatherData.precip} mm`}
        />
        <CardComponent
          image={"https://i.postimg.cc/dQ2gr9hz/sun-weather-icon.png"}
          descrizione={"Indice UV"}
          valore={weatherData.uvIndex}
        />
        <CardComponent
          image={"https://i.postimg.cc/fRrPD2P0/wind.png"}
          descrizione={"Vento"}
          valore={`${weatherData.windDegree}°/${weatherData.windDir} - ${weatherData.windSpeed}km/h`}
        />
        </div>
        <div className="row justify-content-center py-3">
        <CardComponent
          image={"https://i.postimg.cc/fy6zy2y3/sunrise.png"}
          descrizione={"Alba"}
          valore={convertiFormato24Ore(forecastData[0].astro.sunrise)}
        />
        <CardComponent
          image={"https://i.postimg.cc/mDg251Kr/sunset.png"}
          descrizione={"Tramonto"}
          valore={convertiFormato24Ore(forecastData[0].astro.sunset)}
        />
        <CardComponent
          image={"https://i.postimg.cc/fbRgJYFZ/moonrise.png"}
          descrizione={"Alba lunare"}
          valore={convertiFormato24Ore(forecastData[0].astro.moonrise)}
        />
        <CardComponent
          image={"https://i.postimg.cc/mgRnWvyP/moonset.png"}
          descrizione={"Tramonto lunare"}
          valore={convertiFormato24Ore(forecastData[0].astro.moonset)}
        />
      </div>
    </>
  );
}

export default DettagliDesktopComponent;
