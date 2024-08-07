import Weather from "./Weather"
import Currency from "./Currency"
import Location from "./Location"
import Setting from "./Setting"

import SessionContainer from './SessionContainer'

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl text-center m-5">Travel Prep</h1>
      <Setting />
      <Location />
      <SessionContainer>
        <Weather />
      </SessionContainer>
      <SessionContainer>
        <Currency />
      </SessionContainer>
    </div>
  )
}
export default Home