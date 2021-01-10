import React, { useState } from "react";
import Loader from 'react-loader-spinner'
import TemperatureUnit from "./TemperatureUnit.js"
import Daily from "./Daily";
import HourlyForecast from "./HourlyForecast";

import "./WeatherMain.css";
import axios from "axios"

export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    const [unit, setUnit] = useState("celsius");

    function showWeather (response) {
        setWeatherData({
          ready: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          wind: response.data.wind.speed,
          city: response.data.name,
          minTemp: response.data.main.temp_min,
          maxTemp: response.data.main.temp_max,
          longitude: response.data.coord.lon,
          latitude: response.data.coord.lat,
          
        });
        
      }

      function handleSubmitCity(event) {
        event.preventDefault();
        search();}

        function handleCityChange(event) {
            setCity(event.target.value);
          }

 function search() {
    let apiKey = "e91b6bdaf8ad76a25dcc33363848923c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }


 if (weatherData.ready) { return (

<div className="row">
  
<div className="col-lg-8 left-side">
        <TemperatureUnit data={weatherData} unit={unit} setUnit={setUnit}/>
 
 <div>
  <div className="row search-bar-current-location search-bar">
                                <form className="form" onSubmit={handleSubmitCity} id="submit-button">
                                  <div className="form-group w-100" id="input-city-field">
                                    <input
                                      type="search"
                                      id="city"
                                      className="form-control"
                                      placeholder="Enter City Name"
                                      autoComplete="off"
                                      onChange={handleCityChange}
                                    />
                                  </div>
                                </form>

                                <button type="button" id="location-now" >
                                    <i
                                      className="fas fa-map-marker-alt"
                                      aria-hidden="true"
                                      id="locationbutton"
                                    ></i>
                                  </button>
                                </div>
                          </div>
                       
          
                <HourlyForecast latitude={weatherData.latitude} longitude={weatherData.longitude} unit={unit}/>
      
      
        </div>
     
        
         <div className="col-lg-4 right-side">
            <Daily latitude={weatherData.latitude} longitude={weatherData.longitude} unit={unit}/>
         </div>
         
  </div>

  );
} else {
    search();
    return <Loader type="Hearts" color="#FCD6E2" height={80} width={80} />  ;
} } 