import React, { useState } from "react";

export default function Units(props){
  const[degrees, setDegrees]=useState("celsius");

  function showFahrenheit(event){
    event.preventDefault();
    setDegrees("fahrenheit");
  }
  function showCelsius(event){
    event.preventDefault();
    setDegrees("celsius");
  }
  function Fahrenheit(){
    return(props.conversion * 9)/5+32;
  }
  if(degrees==="celsius"){
    return (
      <div className="WeatherUnit">
        <span className="unit">{Math.round(props.conversion)}{""}
          °C{""}|{""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }else{
  return (
    <div className="WeatherUnit">
      <span className="unit">
        {Math.round(Fahrenheit())}
        <a href="/" onClick={showCelsius}>°C</a>{""}|{""}°F
      </span>
    </div>
  );
}}
