import React, { useState } from "react";
import FormatDate from "./FormatDate";
import Daily from "./Daily";
import HourlyForecast from "./HourlyForecast";
import "./styles.css";
import axios from "axios"

export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function showWeather (response) {
        setWeatherData({
          ready: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
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

  <div className="search-bar">
    <div className="col-sm-8 left-side">
     <div className="current-weather">
     <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h1 className="card-title" id="current-city">
            {weatherData.city}
            </h1>
            <span id="current-date">  <FormatDate date={weatherData.date} />  </span>
          </div>
          <div className="col-md-6 degrees">
            <div className="row">
              <div className="col-sm-6">
                <span className="today-degrees">
                  <span id="warmth-now">{Math.round(weatherData.temperature)}°C</span>
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
                <span id="current-humidity">{weatherData.humidity}</span>%
              </div>
              <div className="col-md-6">
                <span>Wind: </span>
                <span id="current-wind">{weatherData.wind}</span>
              </div>
              <div className="col-md-6">
                <span>Min Temp: </span>
                <span id="min-temp">{Math.round(weatherData.minTemp)}°C</span>
              </div>
              <div className="col-md-6">
                <span>Max Temp: </span>
                <span id="max-temp">{Math.round(weatherData.maxTemp)}°C</span>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="description">
            {weatherData.description}
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-3">
          <div
            className="btn-group btn-group-toggle"
            data-toggle="buttons"
            id="toggle-button"
          >
            <label className="btn btn-secondary active" id="celsius-converter">
              <input type="radio" name="options" id="option1" checked />
              °C
            </label>
            <label className="btn btn-secondary" id="fahrenheit-converter">
              <input type="radio" name="options" id="option2" /> °F
            </label>
          </div>
        </div>
        <div className="col-sm-1" id="search-bar-current-location">
          <div>
            <button type="button" id="location-now">
              <i
                className="fas fa-map-marker-alt"
                aria-hidden="true"
                id="locationbutton"
              ></i>
            </button>
          </div>
        </div>
        <div className="col-sm-8">
          <form className="form" onSubmit={handleSubmitCity} id="submit-button">
            <div className="form-group" id="input-city-field">
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
        </div>
      </div>
      <div className="current-weather-hourly">
              <div className="col-sm-12">
                <HourlyForecast latitude={weatherData.latitude} longitude={weatherData.longitude} />
              </div>
            </div>

            </div>
            <div className="col-sm-4 right-side">
            
            <Daily latitude={weatherData.latitude} longitude={weatherData.longitude} />
        
    </div>
  </div>

  );
} else {
    search();
    return "YEEE";
} }
