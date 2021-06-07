import React,{ useEffect} from "react";
import L from "leaflet";
import { Marker, Tooltip,useMap,useMapEvent } from "react-leaflet";
import data from "./data";
import icon from "./icon";
import {checkCordinates,filterGeoJson } from "../../../util";
import { useStore } from "../../../global-state";
import {
  mapWasClicked,
  loadedGeojson,
  setAvailabity
} from "../../../global-state/action";


// adds geojson data
const injectGeoJson=(data,filter,onEachFeature)=>{
  return L.geoJSON(data, {
    style: {color: "#ffc423", opacity:0.4},
    filter:filter
  });
}

const AddGeoJson=()=>{
  const [state, dispatch] = useStore();
  const map = useMap();
  map.setView(state.coordinates,state.zoom)
  const geoJSONlayer = injectGeoJson(data,filterGeoJson);

  useMapEvent(
    {
      click:(e)=> {
        dispatch(mapWasClicked(e.latlng));
        checkCordinates(data,e.latlng.lat, e.latlng.lng).then(
          (value)=> dispatch(setAvailabity(value))
        )
      }
    }
  );

  useEffect(()=>{
    if(state.geojson){
      map.addLayer(geoJSONlayer)
      dispatch(loadedGeojson());
    }

  },[state.geojson,map,geoJSONlayer,dispatch]);

  return(
    !state.marker ? null : (
      <Marker icon={icon} position={[state.coordinates.lat,state.coordinates.lng]}>
        <Tooltip direction="bottom" permanent>{`${state.status}`}</Tooltip>
      </Marker>
  ))

}

export default AddGeoJson;
