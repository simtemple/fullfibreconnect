import { Marker, Tooltip} from "react-leaflet";
import icon from "./icon";
import {useStore } from "../../global-state";


const CustomMaker = () => {
    const state = useStore();
    
    //return null marker if map has not clicked but stills load geojson data
    return (!state.marker ? null : (
        <Marker icon = { icon }
            position = {
            [state.coordinates.lat, 
            state.coordinates.lng] }>

            <Tooltip permanent
                direction = "bottom"> 
                { `${state.status}` } 
            </Tooltip> 

        </Marker>
    ))

}

export default CustomMaker;