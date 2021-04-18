import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherUpdate(props) { 
    return (
    <div className="WeatherUpdate">
    <div className="row">
    <FormattedDate date={props.data.date}/>
      </div>
    <div className="mainData">
      <div className="row">
        <div className="col">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={120} /> 
          </div>
          <div className="heading">
            <h1 className="city">{props.data.city}</h1>
            <p className="text-description">{props.data.description}</p>
            <div>
              <h2 className="temperature">
                <WeatherTemperature celsius={props.data.temperature} /> 
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row otherData">
          <div className="col">
          <p>
            <i class="fas fa-tint"></i> Humidity:{" "}
            <span id="humidity">{props.data.humidity}</span>{" "}%
          </p>
          </div>
          <div className="col">
          <p>
            <i class="fas fa-wind"></i> Wind:{" "} 
            <span id="windspeed">{Math.round(props.data.wind)}</span>{" "}km/h
          </p>
          </div> 
      </div>
      </div>
    </div>
    );
}