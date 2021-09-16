import { useMapEvent } from "react-leaflet";
import { useDispatch,useStore } from "../../global-state";
import { checkCordinates } from '../../util';
import { setAvailability,mapWasClicked } from '../../global-state/action';

function Events({coordinates, data}){
    const dispatch = useDispatch()
    const map = useMapEvent({
        click: (e) => {
            dispatch(mapWasClicked(e.latlng));
            checkCordinates(data, e.latlng.lat, e.latlng.lng).then(
                (value) => dispatch(setAvailability(value))
            )
        }
    });
    map.setView(coordinates);

    return null
}

export default Events;