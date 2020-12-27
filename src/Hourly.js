import React from "react";

import "./styles.css";

export default function Hourly() {
  let hourlyInfo = {
    time: "12:OO",
    humidity: "15",
    temperature: "3"
  };
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5>{hourlyInfo.time} </h5>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            width="80"
            height="80"
            alt="icon"
          />
          <div>
            <span className="hourly-row-1">
              <span className="temperature-warmth">
                {hourlyInfo.temperature}
              </span>
              <span className="temperature-warmth-unit">°C</span>
            </span>
            <span className="hourly-row-2">
              <span className="weather-description-current">
                <i className="fas fa-tint"></i>
                {hourlyInfo.humidity}%
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
