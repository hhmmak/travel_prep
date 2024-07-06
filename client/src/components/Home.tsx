import Weather from "./Weather"
import Currency from "./Currency"
import Location from "./Location"

import SessionContainer from './SessionContainer'

const Home = () => {
  return (
    <div>
      <h1>Travel Prep</h1>
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