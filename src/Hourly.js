import React from "react";
import "./styles.css";

export default function Hourly(props) {

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
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
            src="http://openweathermap.org/img/wn/10d@2x.png"
            width="80"
            height="80"
            alt="icon"
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
