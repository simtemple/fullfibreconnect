import React from "react";

const MapContext = React.createContext();

const initialState={
   geojson: true,
   coordinates:{
     lat: 5.55721,
     lng: -0.2118
   },
   status:"loading...",
   marker:false,
   zoom:13
};

function useMapContext(){
  const context  = React.useContext(MapContext);
  if (!context) {

    throw new Error(`useMapContext must be used within a CountProvider`);

  }

  return context;

}


function MapProvider(props){
  const [state,setState] = React.useState(initialState);
  const value  = React.useMemo(()=>[state,setState], [state]);
  return(
    <MapContext.Provider value={value} {...props} />
  )

}

export {useMapContext, MapProvider }
