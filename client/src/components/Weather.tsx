import { useEffect, useState } from "react"
import axios from 'axios';
import dateFormat from "../util/dateFormat";
import WeatherIcon from "./weatherIcons/WeatherIcon";
import { useLocation } from "../hooks/LocationService";

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

  const { destinationCity, destinationCountry } = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherDataObject>({})
  // lat, lon initiated to Tokyo, Japan
  const [lat, setLat] = useState<number>(35.6762)
  const [lon, setLon] = useState<number>(139.6503)

  const days: number[] = [0, 1, 2, 3, 4, 5, 6];


  useEffect(() => {

    const destinationParsed = (`${destinationCity}-${destinationCountry}`).replaceAll(/[^A-Za-z]+/g, '+').toLowerCase()

    try{
      axios.get(`https://nominatim.openstreetmap.org/search?q=${destinationParsed}&format=json`)
        .then(res => {
          setLat(res.data[0].lat)
          setLon(res.data[0].lon)
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }

    try {
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timeformat=unixtime&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=GMT`)
        .then(res => setWeatherData(res.data))
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }

  }, [destinationCity, destinationCountry, lat, lon]);

  return (
    <div>
      {weatherData.current_weather &&
        <div>
          <h2 className="text-lg my-4">Current Weather at <span className="italic font-bold">{destinationCity}, {destinationCountry}</span></h2>
          {/* <div>Weather Code : {weatherData.current_weather.weathercode} </div> */}
          <div className="flex flex-col items-center">
            <WeatherIcon code={weatherData.current_weather.weathercode} />
            <div>{weatherData.current_weather.temperature} &deg;C</div>
          </div>
        </div>
      }
      <div>
        <h2 className="text-xl my-4">5 Day Weather</h2>
        <div className="flex overflow-x-auto gap-4">
          {days.map((day: number) =>
            <div key={`day-${day}`}>
              {weatherData && weatherData.daily &&
                <div className="border rounded-lg p-4 w-48">
                  <div>{dateFormat(weatherData.daily.time[day] ?? "")}</div>
                  {/* <div>Weather Code : {weatherData.daily.weathercode[day]} </div> */}
                  <WeatherIcon code={weatherData.daily.weathercode[day]} />
                  <div className="text-center">Temp</div>
                  <div className="grid grid-cols-2 justify-items-center">
                    <div className="text-blue-500">{weatherData.daily.temperature_2m_min[day]}</div>
                    <div className="text-red-500">{weatherData.daily.temperature_2m_max[day]}</div>
                  </div>
                  <div className="text-center">Apparent Temp</div>
                  <div className="grid grid-cols-2 justify-items-center">
                    <div className="text-blue-500">{weatherData.daily.apparent_temperature_min[day]}</div>
                    <div className="text-red-500">{weatherData.daily.apparent_temperature_max[day]}</div>
                  </div>
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Weather