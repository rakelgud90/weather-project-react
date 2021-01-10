
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
      if (props.unit === "fahrenheit") {
        temperature = Math.round((temperature * 9) / 5 + 32);
        return `${temperature}°F`;
      }
  
      return `${temperature}°C`;
    }

    
      function humidity() {
        let humidity = props.data.humidity;
    
        return `${humidity}`;
      }

  return (
   
    <div className="card">
      <div className="card-body">
        <div className="row test">
          <div className="col-8 forecast-dates">
            <h6 className="forecast-day">{date()}</h6>
            <ul className="dailyInfo">
            <li className="temperature-warmth">{temperature()}<span className="temperature-warmth-unit"></span></li>
            <li>
              {humidity()}%</li>
            </ul>

          </div>
          <div className="col-4 forecast-dates" >
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}   alt={props.data.description}
              width="65"
              height="65"
            className="dailyIcon"
           
            />
          </div>
        </div>
        
      </div>
    </div>

  );
}