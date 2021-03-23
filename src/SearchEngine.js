import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayTemperature(response) {
    setWeather(
      <ul className="weather">
        <li> Temperature: {Math.round(response.data.main.temp)}°C </li>
        <li> Description: {response.data.weather[0].description} </li>
        <li> Humidity: {Math.round(response.data.main.humidity)}% </li>
        <li> Wind: {Math.round(response.data.wind.speed)} km/h </li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="icon"
          />{" "}
        </li>
      </ul>
    );
  }

  function showCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d58ce6949384336473200edea8ebd96&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={showCity}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{weather}</p>
    </div>
  );
}
