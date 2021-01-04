import React from "react";
import "./styles.css";

export default function Current() {
  let weatherInfo = {
    city: "London",
    temperature: "3°C",
    date: "Sun 6 December 2020 | Last Updated: 18:50",
    description: "Sunny",
    humidity: 70,
    wind: "10 m/s",
    min: "0°C",
    max: "5°C"
  };


  

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h1 className="card-title" id="current-city">
            {weatherInfo.city}
            </h1>
            <span id="current-date"> {weatherInfo.date}</span>
          </div>
          <div className="col-md-6 degrees">
            <div className="row">
              <div className="col-sm-6">
                <span className="today-degrees">
                  <span id="warmth-now"></span>
                </span>
              </div>
              <span className="today-degrees">
                <div className="col-sm-6">
                  <span className="today-weather">
                    <img
                      src="http://openweathermap.org/img/wn/10d@2x.png"
                      alt="icon"
                      id="today-icon"
                      width="120"
                      height="120"
                    />
                  </span>
                </div>
              </span>
            </div>
          </div>
          <div className="col-md-6 more-info">
            <div className="row">
              <div className="col-md-6">
                <span>Humidity: </span>
                <span id="current-humidity">{weatherInfo.humidity}</span>%
              </div>
              <div className="col-md-6">
                <span>Wind: </span>
                <span id="current-wind">{weatherInfo.wind}</span>
              </div>
              <div className="col-md-6">
                <span>Min Temp: </span>
                <span id="min-temp">{weatherInfo.min}</span>
              </div>
              <div className="col-md-6">
                <span>Max Temp: </span>
                <span id="max-temp">{weatherInfo.max}</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="description">
            {weatherInfo.description}
          </div>
        </div>
      </div>
    </div>
  );
}
