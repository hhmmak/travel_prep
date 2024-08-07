import { useState } from "react"

import Weather from "./Weather"
import Currency from "./Currency"
import Location from "./Location"
import SettingToggle from "./SettingToggle"
import SettingOptions from "./SettingOptions"

import SessionContainer from './SessionContainer'


const Home = () => {

  const [showSetting, setShowSetting] = useState<Boolean>(true)
  
  return (
    <div>
      <div>
        <h1 className="text-2xl text-center m-5">Travel Prep</h1>
        <SettingToggle setShowSetting={setShowSetting}/>
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