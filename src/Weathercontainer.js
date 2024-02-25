import React from "react";
import Timestamp from "./Timestamp";
import Iconchanges from "./Iconchanges";

export default function Weathercontainer(props){
  return(
  <div className="information">
  <h1>{props.data.city}</h1>
      <Timestamp date={props.data.date}/>
      <div className="row">
        <div className="col-6">
          <Iconchanges code={props.data.icon}/>
          <ul>
            <li>
              {Math.round(props.data.temperature)}°
              <span className="unit">C</span>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
      </div>
  )
}
