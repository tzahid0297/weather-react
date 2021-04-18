import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./App.css";

export default function ForecastDay(props) { 
    function day() { 
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    
    function maxTemp() { 
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`
    }

    function minTemp() { 
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }
    
    return (
    <div className="ForecastDay">
        <div className="Day"> {day()} </div> 
         <WeatherIcon code={props.data.weather[0].icon} size={50} />
         <div className="Forecast-temperatures"> 
            <span className="Forecast-temperature-max"> {maxTemp()}</span>{" "} 
            <span className="Forecast-temperature-min"> {minTemp()}</span>
         </div>
    </div> 
    );
}