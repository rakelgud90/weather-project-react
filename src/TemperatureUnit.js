import React, { useState } from "react";
import HourlyForecast from "./HourlyForecast"
import Daily from "./Daily"
import "./styless.css"

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheitTemperature() {
        return (Math.round(props.data.temp* 9/5 + 32))

    }
    function fahrenheitMaxTemperature() {
        return (Math.round(props.data.maxTemp* 9/5 + 32))
    }
    function fahrenheitMinTemperature() {
        return (Math.round(props.data.minTemp* 9/5 + 32))
    }
  
}