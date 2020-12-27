import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search-bar">
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
          <form className="form" id="submit-button">
            <div className="form-group" id="input-city-field">
              <input
                type="search"
                id="city"
                className="form-control"
                placeholder="Enter City Name"
                autocomplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
