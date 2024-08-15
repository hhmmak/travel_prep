import {ReactComponent as Icon} from '../assets/settings-icon.svg'

import { useSetting } from "../hooks/SettingService"

const SettingToggle = () => {

  const { showSetting, setShowSetting } = useSetting()

  const displaySettingOptions = () => {
    setShowSetting()
  }

  return (
    <div onClick={displaySettingOptions} className="absolute right-4 top-4">
      <Icon className="h-8 w-8" fill={showSetting ? "#000" : "#999"}/>
    </div>
  )
}
export default SettingToggle