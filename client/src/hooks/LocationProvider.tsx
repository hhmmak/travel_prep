import { useState, ReactNode } from 'react';
import { LocationContext } from './LocationService';


// Create a provider component
export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [origin, setOrigin] = useState('United States')
  const [destination, setDestination] = useState("Hong Kong, China")

  return (
    <LocationContext.Provider value={{ origin, setOrigin, destination, setDestination }}>
      {children}
    </LocationContext.Provider>
  );
};
