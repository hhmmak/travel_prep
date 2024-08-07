import { useState, ReactNode } from 'react';
import { LocationContext } from './LocationService';


// Create a provider component
export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [origin, setOrigin] = useState('United States')
  const [destinationCity, setDestinationCity] = useState("Hong Kong")
  const [destinationCountry, setDestinationCountry] = useState("China")

  return (
    <LocationContext.Provider value={{ origin, setOrigin, destinationCity, setDestinationCity, destinationCountry, setDestinationCountry }}>
      {children}
    </LocationContext.Provider>
  );
};
