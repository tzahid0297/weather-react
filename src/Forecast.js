import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(false);

  function showResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true); 
   }
  
  if (loaded) {
    return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thur</div> 
         <WeatherIcon code="01d" size={50} />
         <div className="Forecast-temperatures"> 
         <span className="Forecast-temperature-max"> 
          {forecastData[0].temp.max}°
         </span> 
         <span className="Forecast-temperature-min">
           {forecastData[0].temp.min}°</span>
         </div> 
        </div>
      </div>
    </div>
  ); 
} else {
  let apiKey = "7d58ce6949384336473200edea8ebd96"
  let longitude = props.coordinates.lon;
  let latitude =  props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showResponse);
  
  return null; 
} 
  
}