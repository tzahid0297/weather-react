import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function Weather(props){
   const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function showResponse(response) {
    setWeatherInfo({
      ready: true, 
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Saturday, 13:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png", 
      wind: response.data.wind.speed,
      city: response.data.name 
    });
   } 

   if (weatherInfo.ready) {return (
    <div className="Weather">
      <form id="search-form">
        <div className="form-row mx-auto pb-2">
          <div className="col-5">
            <input
              type="location"
              className="form-control"
              placeholder="Enter location"
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
      <div className="row">
        <em id="date-time">
          <span>{weatherInfo.date}</span>
        </em>
      </div>
      <div className="row">
        <div className="col">
          <div className="icon">
            <img className="middle" src={weatherInfo.iconUrl} alt={weatherInfo.description} id="icon" />
          </div>
          <div className="heading">
            <h1 id="city">{weatherInfo.city}</h1>
            <p className="text-capitalize" id="temp-description">{weatherInfo.description}</p>
            <div>
              <h2>
                <span className="temp" id="temp">
                  {Math.round(weatherInfo.temperature)}
                </span>
                <span className="units">
                  {" "}
                  <a href="/" id="cel-link">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="fah-link">
                    °F
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col otherData">
          <p>
             Humidity:{" "}
            <span id="humidity">{weatherInfo.humidity}</span>%
          </p>
          <p>
             Wind:{" "}
            <span id="windspeed">{weatherInfo.wind}</span>km/h
          </p>
        </div>
      </div>
      <div className="row forecast-weather" id="forecast"></div>
    </div> 
  );
} else {
    const apiKey = `7d58ce6949384336473200edea8ebd96` 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
    
    return "Loading..."
  }
 
}
    