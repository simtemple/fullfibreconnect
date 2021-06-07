export function translateGPSAddress(data){
  return(
  {
    type:"locate-ghpostAddress",
    payload: data
  })
}

export function gpsLocate(){
  return(
    {
      type:"locate-gps"
    }
  )
}

export function loadedGeojson(){
  return(
    {
      type:"geojson-loaded"
    }
  )
}
export function mapWasClicked(data){
  return(
    {
      type:"map-click",
      payload:data
    }
  )
}
export function plotGPScoords({latitude,longitude}){
  return(
    {
    type:"gps-found",
    payload:{
      lat:latitude,
      lng:longitude
    }
  })

}

export function setAvailabity(data){
  return(
    {
      type:"fibre-availability",
      payload:data
    }
  )

}

export function setGPSFailed(message){
  return(
    {
      type:"gps-not-found",
      payload:message
    }
  )
}
export function plotGhanaGPS(lat,lng){
  return(
    {
      type:"address-found",
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
      type:"address-not-found"
    }
  )
}
