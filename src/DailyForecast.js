import React, { useState } from "react";
import "./dailyForecast.css";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import IndividualDailyForecast from "./IndividualDailyForecast";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container text-center weekForecast">
        <div className="row">
          <div className="col">
            <IndividualDailyForecast data={forecast[0]}/>
          </div>
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