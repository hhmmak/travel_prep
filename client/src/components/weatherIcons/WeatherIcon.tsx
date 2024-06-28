import React from "react";
import ClearSkyDay from "./ClearSkyDay";
import Cloudy from "./Cloudy";
import Drizzle from "./Drizzle";
import Foggy from "./Foggy";
import Rain from "./Rain";
import Snowfall from "./Snowfall";
import Thunderstorm from "./Thunderstorm";

const WeatherIcon = ({code}: {code: number}) => {

  const weatherImg : { [key: number]: JSX.Element } = {
    0: <ClearSkyDay />,
    1: <ClearSkyDay />, 2: <Cloudy />, 3: <Cloudy />,
    45: <Foggy />, 48: <Foggy />,
    51: <Drizzle />, 53: <Drizzle />, 55: <Drizzle />,
    56: <Drizzle />, 57: <Drizzle />,
    61: <Rain />, 63: <Rain />, 65: <Rain />,
    66: <Rain />, 67: <Rain />,
    71: <Snowfall />, 73: <Snowfall />, 75: <Snowfall />,
    77: <Snowfall />,
    80: <Rain />, 81: <Rain />, 82: <Rain />,
    85: <Snowfall />, 86: <Snowfall />,
    95: <Thunderstorm />,
    96: <Thunderstorm />, 99: <Thunderstorm />
  };
  

  const weatherDetail : { [key: number]: string } = {
    0: "Clear Sky",
    1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
    45: "Fog", 48: "Depositing Rime Fog",
    51: "Light Drizzle", 53: "Drizzle", 55: "Dense Drizzle",
    56: "Light Freezing Drizzle", 57: "Dense Freezing Drizzle",
    61: "Light Rain", 63: "Rain", 65: "Heavy Rain",
    66: "Light Freezing Rain", 67: "Heavy Freezing Rain",
    71: "Light Snowfall", 73: "Snowfall", 75: "Heavy Snowfall",
    77: "Snow Grains",
    80: "Light Rain Showers", 81: "Rain Showers", 82: "Violent Rain Showers",
    85: "Light Snow Showers", 86: "Heavy Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Light Hail", 99: "Thunderstorm with Heavy Hail"
  };
  

  return(
    <div className="flex flex-col">
      {weatherImg[code] ?? <Cloudy />}
      {weatherDetail[code] ?? "Not Available"}
    </div>
  )

}
export default WeatherIcon
