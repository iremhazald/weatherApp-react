import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "partlycloudy",
    "broken-clouds-night": "partlycloudy",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightning",
    "thunderstorm-night": "lightning",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "windy",
    "mist-night": "windy",
  };

  return (
    <WeatherSvg
      state={codeMapping[props.code]}
      width={props.size}
      height={props.size}
    />
  );
}
