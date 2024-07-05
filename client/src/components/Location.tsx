import {countries, citiesByContinent} from "../util/locationNames"
import { useLocation } from "./hooks/LocationService";

const Location = () => {

  const {origin, setOrigin, destination, setDestination} = useLocation();

  return (
    <div>
      <div>
        <label htmlFor="origin-dropdown">Home Country : </label>
        <select id="origin-dropdown" defaultValue="United States" onChange={(event) => setOrigin(event.target.value)}>
          {countries.sort().map(origin => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city-dropdown">Destination : </label>
        <select id="city-dropdown" onChange={(event) => setDestination(event.target.value)}>
          {Object.keys(citiesByContinent).map(continent => (
            <optgroup key={continent} label={continent}>
              {citiesByContinent[continent]
                .sort((a, b) => {
                  if (a.country === b.country) {
                    return a.city.localeCompare(b.city);
                  }
                  return a.country.localeCompare(b.country);
                })
                .map(({ city, country }) => (
                  <option key={`${city}-${country}`} value={`${city}, ${country}`}>
                    {city}, {country}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Location