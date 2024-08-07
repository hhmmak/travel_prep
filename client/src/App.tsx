import Home from "./components/Home";
import { LocationProvider } from "./hooks/LocationProvider";


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
