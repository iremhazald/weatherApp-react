import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "1e4573e080b57c89fadd0873aeof420t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                className="form-control"
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                className="btn btn-primary w-100 "
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <br />
        <WeatherForecast city={weatherData.city} />
        <br />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
