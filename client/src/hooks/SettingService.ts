import { createContext, useContext } from 'react';

type SettingContextType = {
  showSetting: boolean,
  setShowSetting: () => void,
  tempUnit: "C" | "F",
  setTempUnit: (tempUnit: "C"| "F") => void
}

// initiate/create context for provider (top level use)
export const SettingContext = createContext<SettingContextType>({
  showSetting: false,
  setShowSetting: () => {},
  tempUnit: "C",
  setTempUnit: () => {}
});

// custom hook to use the context (all lower level use)
export const useSetting = () => useContext(SettingContext)
