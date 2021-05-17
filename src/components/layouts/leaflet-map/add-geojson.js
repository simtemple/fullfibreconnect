import React,{ useEffect} from "react";
import { useMapContext } from "../../map-context";
import L from "leaflet";
import { Marker, Tooltip,useMap,useMapEvent } from "react-leaflet";
import data from "./data";
import icon from "./icon";
import {checkCordinates,filterGeoJson } from "./util";



// removes points from geoJSON data
const injectGeoJson=(data,filter,onEachFeature)=>{
  return L.geoJSON(data, {
    style: {color: "#ffc423", opacity:0.4},
    filter:filter
  });
}

const AddGeoJson=()=>{
  const [state, setState] = useMapContext();
  const map = useMap();
  map.setView(state.coordinates,state.zoom)
  const geoJSONlayer = injectGeoJson(data,filterGeoJson);

  useMapEvent(
    {
      click:(e)=> {
        console.log(e.latlng);
        setState((oldState)=>({...oldState, coordinates:{...e.latlng},status:"loading...",marker:true, zoom:15}));
        

        checkCordinates(data,e.latlng).then(
          (value)=> setState((oldState)=>({...oldState, status:value }))
        )
      }
    }
  );

  useEffect(()=>{
    if(state.geojson){
      map.addLayer(geoJSONlayer)
      setState((oldstate)=>({...oldstate, geojson:false}));
    }

  },[state.geojson,map,geoJSONlayer,setState]);

  return(
    !state.marker ? null : (
      <Marker icon={icon} position={[state.coordinates.lat,state.coordinates.lng]}>
        <Tooltip direction="bottom" permanent>{`${state.status}`}</Tooltip>

      </Marker>
  ))

}

export default AddGeoJson;
