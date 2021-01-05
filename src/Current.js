import React from "react";
import FormatDate from "./FormatDate";
import "./styles.css";

export default function Current(props) {
 
  return (
    <div className="current-weather">
     <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h1 className="card-title" id="current-city">
            {props.data.city}
            </h1>
            <span id="current-date">  <FormatDate date={props.data.date} />  </span>
          </div>
          <div className="col-md-6 degrees">
            <div className="row">
              <div className="col-sm-6">
                <span className="today-degrees">
                  <span id="warmth-now">{Math.round(props.data.temperature)}°C</span>
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
                <span id="current-humidity">{props.data.humidity}</span>%
              </div>
              <div className="col-md-6">
                <span>Wind: </span>
                <span id="current-wind">{props.data.wind}</span>
              </div>
              <div className="col-md-6">
                <span>Min Temp: </span>
                <span id="min-temp">{Math.round(props.data.minTemp)}°C</span>
              </div>
              <div className="col-md-6">
                <span>Max Temp: </span>
                <span id="max-temp">{Math.round(props.data.maxTemp)}°C</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="description">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
