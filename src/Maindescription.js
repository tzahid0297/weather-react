import React from "react";
import "./Maindescription.css";

export default function Maindescription() {
  return (
    <div className="Maindescription">
      <div className="row">
        <div className="col">
          <div className="icon">
            <img className="middle" src="" alt="Cloudy" id="icon" />
          </div>
          <div className="heading">
            <h1 id="city">Lausanne</h1>
            <p id="temp-description">Mostly Cloudy</p>
            <div>
              <h2>
                <span className="temp" id="temp">
                  19
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
    </div>
  );
}
