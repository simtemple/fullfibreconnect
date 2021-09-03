import L from "leaflet";
import icon from "leaflet/src/images/marker.min.svg";
//import icon from "../../../img/marker.svg";

const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 40],

});

export default myIcon;
