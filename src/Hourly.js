import React from "react";
import "./styles.css";

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

    return `${temperature}°C`;
  }

  function humidity() {
    let humidity = props.data.humidity;

    return `${humidity}%`;
  }

  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5> {hours()} </h5>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt={props.data.description}
            width="80"
            height="80"
           
          />
          <div>
            <span className="hourly-row-1">
              <span className="temperature-warmth">
              {temperature()}
              </span>
              <span className="temperature-warmth-unit"></span>
            </span>
            <span className="hourly-row-2">
              <span className="weather-description-current">
                <i className="fas fa-tint" ></i>
                {humidity()}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
