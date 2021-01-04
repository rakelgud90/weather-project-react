import React, { useState } from "react";
import Hourly from "./Hourly";
import axios from "axios";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function handleHourlyForecast (response) {
      setForecast({
        temperatureHourly: response.data.main.temp,
        humidityHourly: response.data.main.humidity,
        longitude: response.data.coord.lon,
        latitude: response.data.coord.lat,
      });
      setLoaded(true);
    }

    function hourlyCall (){
        let apiKey = "086aa1bfd05c11e55d8cff81f8be5a37";
        let units = "metric"
        let longitude = response.data.coord.lon
        let latitude = response.data.coord.lat
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
        axios.get(url).then(handleHourlyForecast);

    }
  
    if (loaded && props.lat === forecast.latitude && props.lon === forecast.longitude)  {
      return (
        <div className="row" id="hourly">

            {forecast.list.slice(0, 8).map(function(forecastItem){
                return  <Hourly data={forecastItem} />;
            })}
     
        </div>
      );
    } else {
      
  hourlyCall();
      return null;
    }
  }