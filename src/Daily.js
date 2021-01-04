import React from "react";
//import DailyDate from "./DailyDate"
import "./styles.css";

export default function Daily() {
  let dailyInfo = {
    day: "Mon",
    date: "9 Dec",
    humidity: 15,
    temperature: 3
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row forecast-information">
          <div className="col-sm-6 forecast-dates">
            <h6 className="forecast-day"> </h6>
          </div>
          <div className="col-sm-6 forecast-dates">{dailyInfo.date}</div>
        </div>
        <div className="row align-items-center justify-content-center forecast-information">
          <div className="col-sm-6 forecast-weather-info">
            <span className="temperature-warmth">{dailyInfo.temperature}</span>
            <span className="temperature-warmth-unit">°C</span>
            <br />
            <span>
              <i className="fas fa-tint" aria-hidden="true"></i>
              {dailyInfo.humidity}%
            </span>
          </div>
          <div className="col-sm-6 forecast-icon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              width="65"
              height="65"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
