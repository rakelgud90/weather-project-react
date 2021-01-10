import React from "react";
import "./HourlyForecast.css";



export default function Hourly(props) {

  function hours() {
    let date = new Date(props.data.dt * 1000);

    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes =date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;

      return `${hours}:${minutes}`;
    }

  }

  function temperature() {
    let temperature = Math.round(props.data.temp);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
      return `${temperature}°F`;
    }

    return `${temperature}°C`;
  }

  function humidity() {
    let humidity = props.data.humidity;

    return `${humidity}%`;
  }

  return (

    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5> {hours()} </h5>
          <div>
            <span className="hourly-row-1"> {temperature()}</span>
            <span><img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt={props.data.description}
            width="70"
            height="70"
           
          /></span>
            <span className="hourly-row-2">
                {humidity()}
             
            </span>
         
          </div>
        </div>
        </div>
      </div>

  );
}
