import React, { useState } from "react";
import axios from "axios";
import WeatherUpdate from "./WeatherUpdate";
import Forecast from "./Forecast";
import "./App.css";

export default function Weather(props){
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showResponse(response) {
    setWeatherInfo({
      ready: true,
      coordinates: response.data.coord, 
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon, 
      wind: response.data.wind.speed,
      city: response.data.name 
    });
   }
   
   function search() { 
   const apiKey = `b459960b012062ea973e4c9dcf5e8658`; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(showResponse); 
  } 

  function handleSubmit(event) { 
    event.preventDefault();
    search();
  }

function handleCityChange(event) { 
 setCity(event.target.value); 
}

  if (weatherInfo.ready) {
    return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="location"
              className="form-control search-input"
              placeholder="Enter location"
              // autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col">
            <input type="submit" value="Search" className="btn btn-info" />
          </div>
        </div>  
      </form>
      <WeatherUpdate data={weatherInfo} />
      <Forecast coordinates={weatherInfo.coordinates}/>
    </div> 
  );
} else {
   search(); 
    return "Loading..."
  }
 
}
    