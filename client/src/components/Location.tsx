import {countries, citiesByContinent} from "../util/locationNames"
import { useLocation } from "../hooks/LocationService";

const Location = () => {

  const { setOrigin, setDestination} = useLocation();

  return (
    <div className="m-4 flex justify-around gap-3">
      <div className="">
        <label htmlFor="origin-dropdown" className="">Home Country : </label>
        <select id="origin-dropdown" defaultValue="United States" onChange={(event) => setOrigin(event.target.value)} className="border p-1 w-72">
          {countries.sort().map(origin => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <label htmlFor="city-dropdown">Destination : </label>
        <select id="city-dropdown" onChange={(event) => setDestination(event.target.value)} className="border p-1 w-72">
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