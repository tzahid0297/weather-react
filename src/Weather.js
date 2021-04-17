import React, { useState } from "react";
import axios from "axios";
import WeatherUpdate from "./WeatherUpdate";
import Forecast from "./Forecast";
import './App.css';

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(showResponse); 
  } 

  function handleSubmit(event) { 
    event.preventDefault();
    search();
  }

function handleCityChange(event) { 
 setCity(event.target.value); 
}

  if (weatherInfo.ready) {return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="form-row mx-auto pb-2">
          <div className="col-5">
            <input
              type="location"
              className="form-control"
              placeholder="Enter location"
              autoFocus="on"
              onChange={handleCityChange}
              id="search-text-input"
            />
          </div>
          <div className="col">
            <input type="submit" value="Search" className="btn btn-info" />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Current Location"
              className="btn btn-success"
              id="current-location"
            />
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
    