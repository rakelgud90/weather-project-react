import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import Daily from "./Daily";

import Search from "./Search";
import Footer from "./Footer"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          
            <Search defaultCity="Reykjavik" />
            
      
          
       
        </div>
        <Footer />
      </div>
    </div>
  );
}
