
function reducer(state, action){
  switch (action.type) {
    case "locate/ghpostAddress":
        state ={...state, search:true}

        return state;
    case "locate/gps":
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
    case "map/click":
          console.log(state);
          state={...state, coordinates:{...action.payload},status:"checking...",marker:true, zoom:15};

          return state;
      case "geojson/loaded":
        state ={...state, geojson:false}
        return state;

      case "fibre-availability":

        state ={...state, status:action.payload}
        return state;


    default:
      return state;
  }

}
export default reducer;
