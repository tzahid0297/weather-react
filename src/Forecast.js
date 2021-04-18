import React, { useState, useEffect} from "react";
import ForecastDay from "./ForecastDay"
import "./Forecast.css";
import axios from "axios";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true); 
   }

  function update() {let apiKey = "b459960b012062ea973e4c9dcf5e8658";
    let longitude = props.coordinates.lon;
    let latitude =  props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metrics`;

    axios.get(apiUrl).then(showResponse);  
  }
  
  if (loaded) {
    return (
    <div className="Forecast">
      <div className="row">
        {forecastData.map(function(dailyForecast, index) {
          if (index < 5) {
            return ( 
            <div className="col" key={index}> 
            <ForecastDay data={dailyForecast} />
            </div>
          ); 
        } else { return null; }  
        })}
      </div>
    </div>
  ); 
} else {
 update(); 
  
  return null; 
} 
  
}