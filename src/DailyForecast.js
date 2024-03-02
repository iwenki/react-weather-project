import React, { useState, useEffect } from "react";
import "./dailyForecast.css";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import IndividualDailyForecast from "./IndividualDailyForecast";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(()=>{
    setLoaded(false);
  },[props.coords]);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container text-center weekForecast">
        <div className="row">
          {forecast.map(function(sixDayForecast, index){
            if(index>0 && index<7){
              return(
               <div className="col-md-4 box" key={index}>
            <IndividualDailyForecast data={sixDayForecast}/>
          </div> 
              );
            } else{
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const key = "cbc90ba0a21t28a990f44b7f6f3ea68o";
    const lon = props.coords.longitude;
    const lat = props.coords.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <PuffLoader
        color={"blue"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        display="block"
        margin="0 auto"
      />
    );
  }
}
