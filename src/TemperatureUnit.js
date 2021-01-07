import React from "react";
import FormatDate from "./FormatDate";
import "./styless.css"

export default function TemperatureUnit(props) {

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (props.unit === "celsius") {
        return (
<div className="Temperature">
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
                          			<img src={props.data.icon} alt={props.data.description} width="120" height="120"
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
                      <span id="current-wind">{Math.round(props.data.wind* 2.237)}</span>
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
 <div className="btn-group btn-group-toggle"
 data-toggle="buttons"
 id="toggle-button"
>
 <label className="btn btn-secondary active" id="celsius-converter">
   <input type="radio" name="options" id="option1" checked onChange={showCelsius}/>
   °C
 </label>
 <label className="btn btn-secondary" id="fahrenheit-converter">
   <input type="radio" name="options" id="option2" /> °F
 </label>
</div>
</div>

        )}
    else 
    {   let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
        let fahrenheitMaxTemp = (props.data.maxTemp * 9) / 5 + 32;
        let fahrenheitMinTemp = (props.data.minTemp * 9) / 5 + 32;
        
return (
<div className="Temperature">
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
                        <span id="warmth-now">{Math.round(fahrenheitTemperature)}°C</span>
                      </span>
                    </div>
                    <span className="today-degrees">
                      <div className="col-sm-6">
                        <span className="today-weather">
                          <img
                           src={props.data.icon} alt={props.data.description}
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
                      <span id="min-temp">{Math.round(fahrenheitMinTemp)}°C</span>
                    </div>
                    <div className="col-md-6">
                      <span>Max Temp: </span>
                      <span id="max-temp">{Math.round(fahrenheitMaxTemp)}°C</span>
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

  <div
    className="btn-group btn-group-toggle"
    data-toggle="buttons"
    id="toggle-button"
  >
    <label className="btn btn-secondary active" id="celsius-converter">
      <input type="radio" name="options" id="option1" checked onChange={showCelsius}/>
      °C
    </label>
    <label className="btn btn-secondary" id="fahrenheit-converter">
      <input type="radio" name="options" id="option2" /> °F
    </label>
  </div>
</div>
 )
}
}
