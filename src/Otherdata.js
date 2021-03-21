import React from "react";
import "./Otherdata.css";
import humidity from "./humidity.svg";
import wind from "./wind.svg";

export default function Otherdata() {
  return (
    <div className="Otherdata">
      <div className="row">
        <div className="col otherData">
          <p>
            <img src={humidity} alt="Humidity" /> Humidity:
            <span id="humidity"> 13</span>%
          </p>
          <p>
            <img src={wind} alt="Wind" /> Wind:
            <span id="windspeed"> 20</span>km/h
          </p>
        </div>
      </div>
    </div>
  );
}