import icon from "../assets/settings-icon.svg"
import { useSetting } from "../hooks/SettingService"

const SettingToggle = () => {

  const { setShowSetting } = useSetting()

  const displaySettingOptions = () => {
    setShowSetting((show: boolean) => !show)
  }

  return (
    <div onClick={displaySettingOptions} className="absolute right-4 top-4">
      <img src={icon} alt="Setting" className="h-8 w-8"/>
    </div>
  )
}
export default SettingToggle