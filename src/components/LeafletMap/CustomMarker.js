import { Marker, Tooltip, useMapEvent } from "react-leaflet";
import data from "./data";
import icon from "./icon";
import { checkCordinates} from "../../util";
import { useDispatch, useStore } from "../../global-state";
import {
    mapWasClicked,
    setAvailability
} from "../../global-state/action";




const CustomMaker = () => {
    const state = useStore();
    const dispatch = useDispatch();
    

    useMapEvent({
        click: (e) => {
            dispatch(mapWasClicked(e.latlng));
            checkCordinates(data, e.latlng.lat, e.latlng.lng).then(
                (value) => dispatch(setAvailability(value))
            )
        }
    });

   
    
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