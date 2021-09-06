import { MapContainer, TileLayer } from 'react-leaflet';
import CustomMarker from "./CustomMarker";
import MapInput from "../MapInput";
import Notification from "../Notification";
import GeoJson from './GeoJson';
import data from './data';
import { useStore } from '../../global-state';
import { selectCoords } from '../../global-state/selectors';






const LeafletMap=()=>{
  const state = useStore();
  const coordinates = selectCoords(state);
  return(
    <div  className="contain-map">
    <MapInput /> { /*Ghana post address translation, gps geolocation, happens here.*/ }
    <Notification />
    <MapContainer
    className="map"
    center={coordinates}
    zoom={13} scrollWheelZoom={false}>

    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoJson data={data}/>
    <CustomMarker /> {/* adds marker and clicks*/ }
  </MapContainer>
  </div>
  )
}

export default LeafletMap;
