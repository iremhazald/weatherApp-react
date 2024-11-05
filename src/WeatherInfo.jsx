import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              {" "}
              <WeatherIcon code={props.data.icon} size={65} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="rightBox">
            <li>
              {" "}
              <b>Humidity:</b> {props.data.humidity}%
            </li>
            <li>
              <b>Wind:</b> {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
