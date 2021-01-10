import React, { useState } from "react";
import Hourly from "./Hourly";
import axios from "axios";



export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function handleHourlyForecast (response) {
        setForecast({
            hourly: response.data.hourly,
            latitude: response.data.lat,
          })
          console.log(response);
      setLoaded(true);
    }

    function hourlyCall (){
        let apiKey = "e91b6bdaf8ad76a25dcc33363848923c";
        let units = "metric"
   
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,daily,alerts&appid=${apiKey}&units=${units}`
        axios.get(apiUrl).then(handleHourlyForecast);

    }
  
    if (loaded && props.latitude === forecast.latitude){
      return (
        <div className="current-weather-hourly">
    <div className="row" id="hourly"> 
            {forecast.hourly.slice(1, 7).map(function(forecastItem){
                return  <Hourly data={forecastItem} unit={props.unit}  />;
            })}
       </div>
        </div>
      );
    } else {
      
         hourlyCall();
      return null;
    }
  }