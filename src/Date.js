import React from "react";
import "./App.css";

export default function Date() {
  function formatDate(timestamp) {

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDate = timestamp.getDate();
  let currentDay = days[timestamp.getDay()];
  let currentMonth = months[timestamp.getMonth()];
  let currentYear = timestamp.getFullYear();
  let formattedDate = `${currentDay}, ${currentDate} ${currentMonth} ${currentYear} - ${formatHours(timestamp)}`;
  return formattedDate;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}


let date = new Date();
let todayDate = document.querySelector("#date-time");
todayDate.innerHTML = formatDate(date);

  return (
    <div className="Date">
      <div className="row">
        <em id="date-time">
          <span></span>
        </em>
      </div>
    </div>
  );
}