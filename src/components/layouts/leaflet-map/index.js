import { MapContainer, TileLayer } from 'react-leaflet';
import MapInput from "./map-input";
import AddGeoJson from "./add-geojson";




const LeafletMap=()=>{

  return(
    <div  className="contain-map">
    <MapInput />

    <MapContainer
    className="map"
    center={[5.6364, -0.2576]}
    zoom={13} scrollWheelZoom={false}>

    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <AddGeoJson />
  </MapContainer>
  </div>
  )
}

export default LeafletMap;
