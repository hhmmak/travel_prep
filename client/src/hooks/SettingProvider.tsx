import { useState, ReactNode } from 'react';
import { SettingContext } from './SettingService';
import useToggle from './useToggle';

// Create a provider component
export const SettingProvider = ({ children }: { children: ReactNode }) => {
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C")
  const [showSetting, setShowSetting] = useToggle()

  return (
    <SettingContext.Provider value={{ showSetting, setShowSetting, tempUnit, setTempUnit }}>
      {children}
    </SettingContext.Provider>
  );
};
