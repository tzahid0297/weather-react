import React from "react";
import "./App.css";

export default function Sourcecode() {
  return (
    <div className="Sourcecode">
      <small>
        <a
          href="https://github.com/tzahid0297/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
        {" "}and{" "}
        <a
          href="https://romantic-booth-0bf03d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        {" "}by Tania Zahid
      </small>
    </div>
  );
}