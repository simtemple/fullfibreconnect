export function findAddress(state, payload){
    return(
      {
        ...state,
        search:true,
        address_found:true,
        marker:false,
        zoom:13
      }
    )
}

export function foundAddress(state,payload){
      return(
        {
          ...state,
          search:false,
          status:"checking...",
          address_found:true,
          coordinates:{ ...payload },
          marker:true,
          zoom:15,
          gps_status:{
            available:true,
            message:""
          }
        }
      );
}

export function addressNotFound(state, payload){
    return(
      {
        ...state,
        search:false,
        status:"checking...",
        address_found:true,
        coordinates:{ ...payload },
        marker:true,
        zoom:15,
        gps_status:{
          available:true,
          message:""
        }
      }
    )
}

export function findGPSCoords(state){
  return({
    ...state,
    search:true,
    status:"checking...",
    marker:false,
    zoom:13
  })
}

export function foundGPSCoords(state,payload){
    return({
      ...state,
      search:false,
      coordinates:{ ...payload },
      marker:true,
      zoom:15,
      gps_status:{
        available:true,
        message:""
      }
    })
}

export function GPSCoordsNotFound(state,payload){
    return({
      ...state,
      marker:false,
      zoom:13,
      gps_status:{
        available:false,
        message:payload
      },
      search:false
    });
}

export function disableNotification(state){
    return(
      {
        ...state,
        gps_status:{
          available:true,
          message:""
        } 
      });
}

export function setFibreAvailability(state,payload){
    return({...state, status:payload})
}

export function setMapClickMarker(state,payload){
    return(
      {
        ...state, 
        coordinates:{...payload},
        status:"checking...",
        marker:true, zoom:15
      });
}