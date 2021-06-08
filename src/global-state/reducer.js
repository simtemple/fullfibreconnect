
function reducer(state, action){
  switch (action.type) {
    case "locate-ghpostAddress":
        state ={
          ...state,
          search:true,
          address_found:true,
        }
        return state;
    case "address-found":
        state = {
          ...state,
          search:false,
          status:"checking...",
          address_found:true,
          coordinates:{ ...action.payload },
          marker:true,
          zoom:15
        }

        return state;
    case "address-not-found":
        state={
          ...state,
          address_found:false
        }

        return state;
    case "locate-gps":
        state ={...state, search:true, status:"checking..."}
        return state;
    case "gps-found":
        state = {
          ...state,
          search:false,
          coordinates:{ ...action.payload },
          marker:true,
          zoom:15
        }
        return state;
    case "gps-not-found":
        state={
          ...state,
          gps_status:{
            available:false,
            message:action.payload
          },
          search:false
        }

      return state;
    case "map-click":

          state={...state, coordinates:{...action.payload},status:"checking...",marker:true, zoom:15};
          return state;
      case "geojson-loaded":
        state ={...state, geojson:false}
        return state;

      case "fibre-availability":

        state ={...state, status:action.payload}
        return state;
      case "disable-notification":
        state ={...state, gps_status:{
          available:true,
          message:""
        }}
        
        return state;

    default:
      return state;
  }

}
export default reducer;
