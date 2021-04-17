import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function fahrenheitConversion(event) { 
    event.preventDefault();
    setUnit("fahrenheit");
} 

function celsiusConversion(event) { 
    event.preventDefault();
    setUnit("celsius");
} 

function fahrenheit() { 
   return (props.celsius * 1.8) + 32; 
} 

if (unit === "celsius") { 
return (
<div className="WeatherTemperature"> 
    <span className="temp" id="temp">
        {Math.round(props.celsius)}
    </span> 
    <span className="units">
        <a href="/" id="cel-link">
            °C
        </a> |
         <a href="/" id="fah-link" onClick={fahrenheitConversion}>
             °F
        </a>
    </span>
</div>
);
} else { 
    return (
    <div className="WeatherTemperature"> 
    <span className="temp" id="temp">
        {Math.round(fahrenheit())}
    </span> 
    <span className="units">
        <a href="/" id="cel-link" onClick={celsiusConversion}>
            °C
        </a> |
            °F
    </span>
</div>
);
} 

}