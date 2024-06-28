import { useEffect, useState } from "react"
import axios from 'axios';
import dateFormat from "../util/dateFormat";
import ClearSkyDay from "./weatherIcons/ClearSkyDay";
import WeatherIcon from "./weatherIcons/WeatherIcon";

type WeatherDataObject = {
  latitude?: number,
  longitude?: number,
  generationtime_ms?: number,
  utc_offset_seconds?: number,
  timezone?: string,
  timezone_abbreviation?: string,
  elevation?: number,
  current_weather?: {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    is_day: number,
    time: string
  },
  daily_units?: {
    time: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    apparent_temperature_max: string,
    apparent_temperature_min: string
  },
  daily?: {
    time: string[] | number[],
    weathercode: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    apparent_temperature_max: number[],
    apparent_temperature_min: number[]
  }
}

const Weather = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataObject>({})
  // lat, lon initiated to Tokyo, Japan
  const [lat, setLat] = useState<number>(35.6762)
  const [lon, setLon] = useState<number>(139.6503)

  const days: number[] = [0, 1, 2, 3, 4, 5, 6];


  useEffect(() => {

    try {
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timeformat=unixtime&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=GMT`)
        .then(res => setWeatherData(res.data))
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }

  }, [lat, lon]);

  return (
    <div>
      {weatherData.current_weather &&
        <div>
          <h3>Current Weather</h3>
          <div>Temperature: {weatherData.current_weather.temperature} &deg;C</div>
          <div>Weather Code : {weatherData.current_weather.weathercode} </div>
          <WeatherIcon code={weatherData.current_weather.weathercode} />
        </div>
      }
      <div>
        <h3>5 Day Weather</h3>
        <div className="flex overflow-y-auto gap-4">
          {days.map((day: number) =>
            <div key={`day-${day}`} className="border rounded-lg">
              {weatherData && weatherData.daily &&
                <>
                  <div>{dateFormat(weatherData.daily.time[day] ?? "")}</div>
                  <div>Weather Code : {weatherData.daily.weathercode[day]} </div>
                  <WeatherIcon code={weatherData.daily.weathercode[day]} />
                  <div>Max Temp : {weatherData.daily.temperature_2m_max[day]} </div>
                  <div>Min Temp : {weatherData.daily.temperature_2m_min[day]} </div>
                  <div>Apparent Max Temp : {weatherData.daily.apparent_temperature_max[day]} </div>
                  <div>Apparent Min Temp : {weatherData.daily.apparent_temperature_min[day]} </div>
                </>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Weather