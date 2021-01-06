import React, { useState } from "react";
import DailyDate from "./DailyDate";
import axios from "axios";


export default function Daily(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function handleDailyForecast (response) {
        setForecast({
            daily: response.data.daily,
            latitude: response.data.lat,
          })
          console.log(response);
      setLoaded(true);
    }

    function dailyCall (){
        let apiKey = "e91b6bdaf8ad76a25dcc33363848923c";
        let units = "metric"
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
        axios.get(apiUrl).then(handleDailyForecast);

    }
  
    if (loaded && props.latitude === forecast.latitude){
      return (
        <div className="weather-forecast" id="daily">

{forecast.daily.slice(1, ).map(function(forecastItem){
                return  <DailyDate data={forecastItem} />;
            })}
     
        </div>
      );
    } else {
      
         dailyCall();
      return null;
    }
  }