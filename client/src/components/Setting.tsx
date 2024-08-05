const Setting = () => {
  return (
    <div>
      <label htmlFor="city-dropdown">Destination : </label>
      <select id="city-dropdown" onChange={() => { }} className="border p-1 w-12">
        <option key={"celcius"} value={"celcius"}>
          &deg;C
        </option>
        <option key={"fahrenheit"} value={"fahrenheit"}>
          &deg;F
        </option>
      </select>
    </div>
  )
}
export default Setting