import React, {useState} from "react";
import axios from "axios";
import "./weather.css";
import { PuffLoader } from "react-spinners";
import WeatherContainer from './WeatherContainer.js';
import DailyForecast from "./DailyForecast";

export default function Weather(props){
  const[city, setCity]=useState(props.defaultCity);
  const[weatherData,setWeatherData]=useState({ready:false});
  function handleResponse(response){
    setWeatherData({
      ready:true,
      city: response.data.city,
      coordinates: response.data.coordinates, 
      date: new Date(response.data.time *1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      feels: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
    });
  }
  function search(){
    const apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }
  function deliverSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityUpdate(event){
    setCity(event.target.value);
  }
  if(weatherData.ready){
  return (
    <div className="Weather">
      <form onSubmit={deliverSubmit}>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              onChange={handleCityUpdate}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 infoButton"
            />
          </div>
        </div>
      </form>
      <WeatherContainer data={weatherData}/>
      <DailyForecast coords={weatherData.coordinates}/>
    </div>
  );
}
else{
  search();
  return (
    <PuffLoader
      color={"blue"}
      size={250}
      aria-label="Loading Spinner"
      data-testid="loader"
      display="block"
      margin="0 auto"
    />
  
  );
}}