import Home from "./components/Home";
import { LocationProvider } from "./components/hooks/LocationProvider";


function App() {
  return (
    <div>
      <LocationProvider>
        <Home />
      </LocationProvider>
    </div>
  );
}

export default App;
