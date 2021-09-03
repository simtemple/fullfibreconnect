import { MapContainer, TileLayer } from 'react-leaflet';
import MapInput from "../MapInput";
import Notification from "../Notification";
import AddGeoJson from "./add-geojson";




const LeafletMap=()=>{

  return(
    <div  className="contain-map">
    <MapInput /> { /*Ghana post address translation, gps geolocation, happens here.*/ }
    <Notification />
    <MapContainer
    className="map"
    center={[5.6364, -0.2576]}
    zoom={13} scrollWheelZoom={false}>

    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <AddGeoJson /> {/* map click, load geojson, add maker all happens here*/ }
  </MapContainer>
  </div>
  )
}

export default LeafletMap;
