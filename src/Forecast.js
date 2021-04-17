import React, { useState } from "react";
import ForecastDay from "./ForecastDay"
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
        <ForecastDay data={forecastData[0]} />
        </div>
      </div>
    </div>
  ); 
} else {
  let apiKey = "b459960b012062ea973e4c9dcf5e8658"
  let longitude = props.coordinates.lon;
  let latitude =  props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(showResponse);
  
  return null; 
} 
  
}