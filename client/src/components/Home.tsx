import { useSetting } from "../hooks/SettingService"

import Weather from "./Weather"
import Currency from "./Currency"
import Location from "./Location"
import SettingToggle from "./SettingToggle"
import SettingOptions from "./SettingOptions"

import SessionContainer from './SessionContainer'


const Home = () => {
  
  const { showSetting } = useSetting()

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center m-5">Travel Prep</h1>
        <SettingToggle />
      </div>
      { showSetting &&
        <SettingOptions />
      }
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