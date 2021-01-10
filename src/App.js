import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  

import Search from "./WeatherMain";
import Footer from "./Footer"
import "./App.css";

export default function App() {
  return (
    <div className="App">
    
    <div className="container">
        <Search defaultCity="Reykjavik" />    
        <Footer />
      </div>
      </div>
  );
}
