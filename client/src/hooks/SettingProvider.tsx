import { useState, ReactNode } from 'react';
import { SettingContext } from './SettingService';


// Create a provider component
export const SettingProvider = ({ children }: { children: ReactNode }) => {
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C")
  const [showSetting, setShowSetting] = useState<boolean>(false)

  return (
    <SettingContext.Provider value={{ showSetting, setShowSetting, tempUnit, setTempUnit }}>
      {children}
    </SettingContext.Provider>
  );
};
