import { createContext, useContext } from 'react';

type LocationContextType = {
  origin: string,
  setOrigin: (origin: string) => void,
  destination: string,
  setDestination: (destination: string) => void
}

// initiate/create context for provider (top level use)
export const LocationContext = createContext<LocationContextType>({
  origin: "United States",
  setOrigin: () => {},
  destination: "Hong Kong, China",
  setDestination: () => {}
});

// custom hook to use the context (all lower level use)
export const useLocation = () => useContext(LocationContext)
