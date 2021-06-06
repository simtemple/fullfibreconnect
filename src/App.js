import LandingPage from "./components/landing-page";
import { MapProvider } from "./global-state/index";

import "bulma/css/bulma.css";
import "leaflet/dist/leaflet.css"
import "./stylesheets/app.css";



function App() {
  return(
    <MapProvider>
      <LandingPage />
    </MapProvider>
  )
}

export default App;
