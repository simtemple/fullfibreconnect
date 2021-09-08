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

export function translateGPSAddress(data){
  return(
  {
    type:FIND_ADDRESS,
    payload: data
  })
}

export function plotGhanaGPS(lat,lng){
  return(
    {
      type:FOUND_ADDRESS,
      payload:{
        lat:lat,
        lng:lng
      }
    }
  )

}

export function addressNotFound(){
  return(
    {
      type:ADDRESS_NOT_FOUND,
    }
  )
}

export function gpsLocate(){
  return(
    {
      type:FIND_GPS_COORDINATE
    }
  )
}

export function plotGPScoords({latitude,longitude}){
  return(
    {
    type:FOUND_GPS_COORDINATE,
    payload:{
      lat:latitude,
      lng:longitude
    }
  })

}

export function setGPSFailed(message){
  return(
    {
      type:GPS_COORDINATES_NOT_FOUND,
      payload:message
    }
  )
}



export function setAvailability(data){
  return(
    {
      type:SET_FIBRE_AVAILABILITY,
      payload:data
    }
  )

}

export function mapWasClicked(data){
  return(
    {
      type:MAP_CLICK,
      payload:data
    }
  )
}



export function disableNotification(){
  return({
    type:DISABLE_NOTIFICATION
  })
}
