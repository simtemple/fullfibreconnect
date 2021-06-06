import {
  useReducer,
  createContext,
  useContext,
  useMemo
} from "react";

import reducer from "./reducer"

const mapContext = createContext();
const initialState={
   geojson: true,
   coordinates:{
     lat: 5.55721,
     lng: -0.2118,
     accuracy:0
   },
   status:"checking...",
   search:false,
   marker:false,
   zoom:13,
   gps_status: true,
   internet_status:true,
   address_found:true
};


function MapProvider(props){
  const [state, dispatch] = useReducer(reducer,initialState);
  const value  = useMemo(()=>[state, dispatch], [state]);
  return(
    <mapContext.Provider value={value} {...props} />
  )

}

function useStore(){
  const context = useContext(mapContext);
  if(!context){
    throw new Error("store should be use within MapProvider");
  }
  return context;
}
export { useStore, MapProvider }
