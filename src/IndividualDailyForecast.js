import React from "react";
import IconChanges from "./IconChanges";

export default function IndividualDailyForecast(props){
  function day(){
    let date=new Date(props.data.time * 1000);
    let day=date.getDay();
    let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return(
  <ul className="list-group">
    <li className="list-group-item dayHeader">{day()}</li>
    <li className="list-group-item main">
      <IconChanges code={props.data.condition.icon} size={35} />
      <span className="dailyDescription">
        {" "}
        {props.data.condition.description}
      </span>
    </li>
    <li className="list-group-item dayFooter">
      <span className="highTemp">
        High:{Math.round(props.data.temperature.maximum)}°C
      </span>{" "}
      {""}|{""}
      <span className="lowTemp">
        {" "}
        Low: {Math.round(props.data.temperature.minimum)}°C
      </span>
    </li>
  </ul>);
}