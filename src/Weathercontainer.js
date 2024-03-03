import React from "react";
import Units from "./Units";
import IconChanges from "./IconChanges";
import TimeStamp from "./TimeStamp";


export default function Weathercontainer(props) {
  return (
    <div className="information">
      <h1>{props.data.city}</h1>
      <TimeStamp date={props.data.date} />
      <div className="row">
        <div className="col-md-6 text-center">
          <IconChanges code={props.data.icon} size={150} />
          <ul>
            <li>
              <Units conversion={props.data.temperature} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/sec</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
