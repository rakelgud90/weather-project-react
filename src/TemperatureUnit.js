import React from "react";
import FormatDate from "./FormatDate";
import "./TemperatureUnit.css"



export default function TemperatureUnit(props) {


    function showFahrenheit(event) {
        event.preventDefault();
        props.setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        props.setUnit("celsius")
    }

    if (props.unit === "celsius") {
        return (
<div className="Temperature left-side">
<div className="current-weather">
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="card-title">
                    {props.data.city}
                    </h1>
                    <span id="current-date">  <FormatDate date={props.data.date} />  </span>
                </div>
                 <div className="col-md-6">
                    <div className="row">

                        <div className="col-sm-6">
                         
                                <img id="current-icon" src={props.data.icon} alt={props.data.description} width="120" height="120"
                                />

                            
                                 <small  id="description">{props.data.description}</small>
                              
                           
                        </div>
                        <div className="col-sm-6">
                            <span className="today-degrees">
                                <span id="warmth-now">
                                    {Math.round(props.data.temperature)}°C 
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
             
                <div className="col-md-6 more-info">
                  <div className="row">
                    <div className="col-md-6">
                      <span> <strong>Humidity:</strong> {props.data.humidity} % </span>
                    </div>
                    <div className="col-md-6">
                      <span><strong>Wind:</strong> {Math.round(props.data.wind* 2.237)} m/s</span>
                    </div>
                    <div className="col-md-6">
                      <span><strong>Min Temp</strong>: {Math.round(props.data.minTemp)}°C</span>
                    </div>
                    <div className="col-md-6">
                      <span><strong>Max Temp: </strong>{Math.round(props.data.maxTemp)}°C</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  
                  <div className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                        id="toggle-button"
                        >
                        <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1"/>
                        °C
                        </label>
                        <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" onClick={showFahrenheit} /> °F
                        </label>
                        </div>
                </div>
             </div>
        </div>
    </div>
</div>




</div>

        )}
    else 
    {   let fahrenheitTemperature = (props.data.temperature * 9) / 5 + 32;
        let fahrenheitMaxTemp = (props.data.maxTemp * 9) / 5 + 32;
        let fahrenheitMinTemp = (props.data.minTemp * 9) / 5 + 32;  
        
return (
<div className="Temperature left-side">
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
                 <div className="col-md-6">
                    <div className="row">
                        
                        <div className="col-sm-6">
                                <img id="current-icon" src={props.data.icon} alt={props.data.description} width="120" height="120"
                                />
                                 <small  id="description">{props.data.description}</small>
                        </div>
                        <div className="col-sm-6">
                            <span className="today-degrees">
                                <span id="warmth-now">
                                {Math.round(fahrenheitTemperature)}°F
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
             
                <div className="col-md-6 more-info">
                  <div className="row">
                    <div className="col-md-6">
                      <span><strong>Humidity: </strong>{props.data.humidity} % </span>
                   
                    </div>
                    <div className="col-md-6">
                      <span><strong>Wind: </strong>{Math.round(props.data.wind* 2.237)} mph</span>
                 
                    </div>
                    <div className="col-md-6">
                      <span><strong>Min Temp: </strong>{Math.round(fahrenheitMinTemp)}°F </span>

                    </div>
                    <div className="col-md-6">
                      <span><strong>Max Temp:</strong> {Math.round(fahrenheitMaxTemp)}°F </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                        id="toggle-button"
                        >
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option1" checked onClick={showCelsius} />
                            °C
                            </label>
                            <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option2" /> °F
                            </label>
                        </div>
                     </div>

             </div>
        </div>
    </div>
</div>




</div>


 )
} 
}
