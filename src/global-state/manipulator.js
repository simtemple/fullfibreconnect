import produce from "immer";

export function findAddress(state){
     

    return(
      produce(state, draft=>{
        draft.search= true;
        draft.zoom = 13;
        draft.address_found= true;
        draft.marker="false"
      })
    )
}

export function foundAddress(state,payload){
  
      return(
        produce(state, draft=>{
          draft.search = false;
          draft.status="checking...";
          draft.address_found = true;
          draft.coordinates= payload;
          draft.zoom=15;
          draft.marker = true;
          draft.gps_status.available = true;
        })
      );
}

export function addressNotFound(state){

    
    return(
      produce(state,draft=>{
        draft.search=false;
        draft.status = "checking";
        draft.address_found=false;
        draft.coordinates.marker=false;
        draft.zoom = 13;
        draft.gps_status.available=false;
        draft.gps_status.message ="Ghana Address not Found"
  
      })
    );
}

export function findGPSCoords(state){

  
    return(
        produce(state, draft=>{
          draft.search = true;
          draft.marker = false;
          draft.zoom = 13;
          draft.status = "checking..."
          draft.gps_status.available = true;
        }
    )
  )
}

export function foundGPSCoords(state,payload){
  
    return(
      produce(state, draft=>{
        draft.search=false;
        draft.coordinates= payload;
        draft.marker=true;
        draft.zoom=15;
        draft.gps_status.available= true;
        draft.gps_status.message="";
         
     })
    )
}

export function GPSCoordsNotFound(state,payload){
  
    return(
      produce(state, draft=>{
        draft.search = false;
        draft.marker = false;
        draft.zoom = 13;
        draft.gps_status.available = false;
        draft.gps_status.message = payload;
      })
    );
}

export function disableNotification(state){

  
    return(
      produce(state, draft=>{
        draft.gps_status.available= true;
        draft.gps_status.message="";
      })
    );
}

export function setFibreAvailability(state,payload){
    return( produce(state, draft=>{ 
      draft.status= payload 
      draft.gps_status.available = false;
      draft.gps_status.message = payload
    
    }))
}

export function setMapClickMarker(state,payload){
  
    return(
      produce(state, draft=>{
        draft.coordinates = payload;
        draft.marker = true;
        draft.status ="checking...";
    
      })
    );
}