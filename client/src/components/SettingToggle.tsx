import icon from "../assets/settings-icon.svg"

const SettingToggle = ({setShowSetting} : {setShowSetting: React.Dispatch<React.SetStateAction<Boolean>>}) => {

  const displaySettingOptions = () => {
    setShowSetting(show => !show)
  }

  return (
    <div onClick={displaySettingOptions} className="absolute right-4 top-4">
      <img src={icon} alt="Setting" className="h-8 w-8"/>
    </div>
  )
}
export default SettingToggle