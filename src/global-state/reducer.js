import { 
  foundGPSCoords,
  foundAddress,
  addressNotFound,
  GPSCoordsNotFound,
  findGPSCoords,
  setMapClickMarker,
  setFibreAvailability,
  disableNotification,
  findAddress
} from "./manipulator";

import { 
  FIND_ADDRESS,
  FOUND_ADDRESS,
  ADDRESS_NOT_FOUND,
  FIND_GPS_COORDINATE,
  FOUND_GPS_COORDINATE,
  GPS_COORDINATES_NOT_FOUND,
  SET_FIBRE_AVAILABILITY,
  DISABLE_NOTIFICATION,
  MAP_CLICK
} from "./actionTypes"

function reducer(state, action){
  const { payload } = action;

  switch (action.type) {
    case FIND_ADDRESS:
        return findAddress(state);

    case FOUND_ADDRESS:

        return foundAddress(state, payload);
    case ADDRESS_NOT_FOUND:
        
        return addressNotFound(state,payload);
    case FIND_GPS_COORDINATE:

        return findGPSCoords(state);
    case FOUND_GPS_COORDINATE:
        
        return foundGPSCoords(state,payload);
    case GPS_COORDINATES_NOT_FOUND:
       
        return GPSCoordsNotFound(state,payload);

    case MAP_CLICK:

        return setMapClickMarker(state, payload);

    case SET_FIBRE_AVAILABILITY:
        
        return setFibreAvailability(state, payload);

    case DISABLE_NOTIFICATION:

        return disableNotification(state);

    default:
      return state;
  }

}
export default reducer;
