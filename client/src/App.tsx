import Home from "./components/Home";
import { LocationProvider } from "./hooks/LocationProvider";
import { SettingProvider } from "./hooks/SettingProvider";

function App() {
  return (
    <div>
      <SettingProvider>
        <LocationProvider>
        <Home />
        </LocationProvider>
      </SettingProvider>
    </div>
  );
}

export default App;
