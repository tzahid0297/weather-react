import React from "react";
import "./Otherdata.css";
;

export default function Otherdata() {
  return (
    <div className="Otherdata">
      <div className="row">
        <div className="col otherData">
          <p>
             Humidity:
            <span id="humidity"> 13</span>%
          </p>
          <p>
             Wind:
            <span id="windspeed"> 20</span>km/h
          </p>
        </div>
      </div>
    </div>
  );
}