import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){
    function showResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    } 
    let apiKey = `7d58ce6949384336473200edea8ebd96` 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
    return (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    )
}