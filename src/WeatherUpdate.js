import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherUpdate(props) { 
    return (
    <div className="WeatherUpdate">
<div className="row" id="date-time">
    <FormattedDate date={props.data.date}/>
      </div>
      <div className="row">
        <div className="col">
          <div className="icon">
            <WeatherIcon code={props.data.icon} /> 
          </div>
          <div className="heading">
            <h1 id="city">{props.data.city}</h1>
            <p className="text-capitalize" id="temp-description">{props.data.description}</p>
            <div>
              <h2>
                <WeatherTemperature celsius={props.data.temperature} />
                
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col otherData">
          <p>
             Humidity:{" "}
            <span id="humidity">{props.data.humidity}</span>%
          </p>
          <p>
             Wind:{" "}
            <span id="windspeed">{props.data.wind}</span>km/h
          </p>
        </div>
      </div>
        </div>
    );
}