import {
  useReducer,
  createContext,
  useContext,
} from "react";

import reducer from "./reducer"

const MapContext = createContext();

const initialState={
   coordinates:{
     lat: 5.55721,
     lng: -0.2118,
     accuracy:0
    },
   status:"checking...",
   search:false,
   marker:false,
   zoom:13,
   gps_status:{
     available: true,
     message:"",
   },
   internet_status:true,
   address_found:true
};


function MapProvider(props){
 
  return(
    <MapContext.Provider value={useReducer(reducer,initialState)} {...props} />
  )

}

function useStore(){
  const context = useContext(MapContext)[0];
  if(!context){
    throw new Error("store should be use within a MapProvider");
  }
  return context;
}

function useDispatch(){
  const dispatch = useContext(MapContext)[1];
  if(!dispatch){
    throw new Error("useDispatch can not be used outside MapProvide")
  }
  return dispatch;
}
export { MapProvider, useStore,useDispatch}
