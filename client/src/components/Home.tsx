import Weather from "./Weather"
import Currency from "./Currency"

import SessionContainer from './SessionContainer'

const Home = () => {
  return (
    <div>
      <h1>Travel Prep</h1>
      <div>
        <div>Home Country : USA</div>
        <div>Destination : Japan</div>
      </div>
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