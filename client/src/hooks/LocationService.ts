import { createContext, useContext } from 'react';

type LocationContextType = {
  origin: string,
  setOrigin: (origin: string) => void,
  destinationCity: string,
  setDestinationCity: (destinationCity: string) => void
  destinationCountry: string,
  setDestinationCountry: (destinationCountry: string) => void
}

// initiate/create context for provider (top level use)
export const LocationContext = createContext<LocationContextType>({
  origin: "United States",
  setOrigin: () => {},
  destinationCity: "Hong Kong",
  setDestinationCity: () => {},
  destinationCountry: "China",
  setDestinationCountry: () => {}
});

// custom hook to use the context (all lower level use)
export const useLocation = () => useContext(LocationContext)
