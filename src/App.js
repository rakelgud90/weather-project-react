import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';    
import WeatherMain from "./WeatherMain";
import "./App.css";

export default function App() {
  return (
    <div className="App">
    
    <div className="container">
        <WeatherMain defaultCity="Reykjavik" />    
        <footer>
      <a href="https://github.com/rakelgud90/weather-project-react">Open-Source Code </a>
      By Rakel Jonsdottir Gudmann 🇮🇸
    </footer>
      </div>
      </div>
  );
}
