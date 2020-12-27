import React from "react";
import "./styles.css";

export default function Daily() {
  let dailyInfo = {
    day: "Mon",
    date: "9 Dec",
    humidity: 15,
    temperature: 3
  };
  return (
    <div class="card">
      <div class="card-body">
        <div class="row forecast-information">
          <div class="col-sm-6 forecast-dates">
            <h6 class="forecast-day">{dailyInfo.day}</h6>
          </div>
          <div class="col-sm-6 forecast-dates">{dailyInfo.date}</div>
        </div>
        <div class="row align-items-center justify-content-center forecast-information">
          <div class="col-sm-6 forecast-weather-info">
            <span class="temperature-warmth">{dailyInfo.temperature}</span>
            <span class="temperature-warmth-unit">°C</span>
            <br />
            <span>
              <i class="fas fa-tint" aria-hidden="true"></i>
              {dailyInfo.humidity}%
            </span>
          </div>
          <div class="col-sm-6 forecast-icon">
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
