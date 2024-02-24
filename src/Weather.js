import React, {useState} from "react";
import axios from "axios";
import "./weather.css";
import Timestamp from "./Timestamp";
import { PuffLoader } from "react-spinners";
export default function Weather(props){
  const[weatherData,setweatherData]=useState({ready:false});
  function handleResponse(response){
    setweatherData({
      ready:true,
      city: response.data.city,
      date: new Date(response.data.time *1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      feels: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon
    });
  }
  if(weatherData.ready){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <Timestamp date={weatherData.date}/>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.icon}
            alt={weatherData.iconDescription}
          />
          <ul>
            <li>
              {Math.round(weatherData.temperature)}°
              <span className="unit">C</span>
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(weatherData.feels)}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
else{
  const apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <PuffLoader
      color={"blue"}
      size={250}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}}