
import React from "react";
import "./styles.css";

export default function DailyDate(props) {

    function date() {
      let date = new Date(props.data.dt * 1000);
        let monthsWeek = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          let monthWeek = monthsWeek[date.getMonth()];

        let daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let dayWeek = daysWeek[date.getDay()];
    
        let dateWeek = date.getDate();

        return `${dayWeek} | ${dateWeek} ${monthWeek}`
    }

      function temperature() {
        let temperature = Math.round(props.data.temp.day); 
    
        return `${temperature}`;
      }
    
      function humidity() {
        let humidity = props.data.humidity;
    
        return `${humidity}`;
      }

  return (
    <div className="card">
      <div className="card-body">
        <div className="row forecast-information">
          <div className="col-sm-6 forecast-dates">
            <h6 className="forecast-day"> {date()}</h6>
          </div>
          <div className="col-sm-6 forecast-dates"> XX </div>
        </div>
        <div className="row align-items-center justify-content-center forecast-information">
          <div className="col-sm-6 forecast-weather-info">
            
            <span className="temperature-warmth">{temperature()}</span>
            <span className="temperature-warmth-unit">°C</span>
            <br />
            <span>
              <i className="fas fa-tint" aria-hidden="true"></i>
              {humidity()}%
            </span>
          </div>
          <div className="col-sm-6 forecast-icon">
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}  alt={props.data.description}
              width="65"
              height="65"
          
            />
          </div>
        </div>
      </div>
    </div>
  );
}