import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Daily from "./Daily";

import Search from "./Search";
import Footer from "./Footer"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 left-side">
            <Search defaultCity="Reykjavik" />
            
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
        <Footer />
      </div>
    </div>
  );
}
