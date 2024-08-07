const Setting = () => {
  return (
    <div className="m-4 p-4 border-l-4 border-b-4 rounded-lg">
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