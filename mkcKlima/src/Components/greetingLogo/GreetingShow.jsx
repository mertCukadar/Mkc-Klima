import React, { useState, useEffect } from "react";
import logo from "../../../public/images/logo.jpeg";
import "./GreetingShow.css";

export function GreetingShow() {
  return (
    <div className= "container">
        <div>
          <img src={logo} alt="MKC Klima" /> 
        </div>
    </div>
  );
}
