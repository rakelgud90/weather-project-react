import React from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Current from "./Current";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 left-side">
            <div className="current-weather">
              <Current />
            </div>
            <Search />
            <div className="current-weather-hourly">
              <div className="col-sm-12">
                <div className="row" id="hourly">
                  <Hourly />
                  <Hourly />
                  <Hourly />
                  <Hourly />
                  <Hourly />
                  <Hourly />
                  <Hourly />
                  <Hourly />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 right-side">
            <div className="weather-forecast" id="daily">
              <Daily />
              <Daily />
              <Daily />
              <Daily />
              <Daily />
              <Daily />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
