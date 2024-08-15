import { useSetting } from "../hooks/SettingService"

const SettingOptions = () => {

  const { setTempUnit } = useSetting();

  return (
    <div className="m-4 p-4 border-l-4 border-b-4 rounded-lg">
      <label htmlFor="city-dropdown">Destination : </label>
      <select id="city-dropdown" onChange={(event) => setTempUnit(event.target.value as "C"|"F")} className="border p-1 w-12">
        <option key={"celcius"} value={"C"}>
          &deg;C
        </option>
        <option key={"fahrenheit"} value={"F"}>
          &deg;F
        </option>
      </select>
    </div>
  )
}
export default SettingOptions