import {useEffect} from "react";
import L from "leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import {filterGeoJson } from "../../util";


function GeoJson({data,color="#ffc423", opacity=0.4}){
    const context  = useLeafletContext();
     
    if(!context.map){
        throw new Error("GeoJson component should be within a MapContainer component");
    }

    useEffect(()=>{
        const container = context.map;

        const geo_json = L.geoJSON(data, {
            style: { color: color, opacity: opacity },
            filter: filterGeoJson
        });

        container.addLayer(geo_json);
        return ()=>{
            container.removeLayer(geo_json)
        }
    })

    return null

}

export default GeoJson;