import { useState } from "react";
import { checkCordinates } from "../../../util";
import data from "./data"
import ghanaPostGPS from "../../../ghpostgps-address";
import { useStore } from "../../../global-state";
import {
  plotGPScoords,
  plotGhanaGPS,
  setAvailabity,
  setGPSFailed,
  gpsLocate,
  addressNotFound
} from "../../../global-state/action";



const GPSAndProgress=({handleClick, status, found })=>{

  return(
    <div className="buttons is-group">
      <button onClick={ handleClick } className="button is-info">use GPS</button>
      { status ?(<button className="button is-info is-loading"></button>):null }
      { !found ?(<button className="button" disabled>Address Not Found</button>): null }
    </div>
  )
}
const MapInput=()=>{
  const urlencoded = new URLSearchParams();
  const [address, setAddress] =useState("");
  const [state, dispatch ] = useStore();


  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
        handleCheck(e);
    }
  }

  const handleCheck=(e)=>{
      if(address.length >= 9 && address.indexOf("-") === 2 ){
        urlencoded.append("address", address);
        dispatch(gpsLocate());
        ghanaPostGPS(urlencoded.toString()).then(
          (json)=>{
            if(json.found){
              dispatch(plotGhanaGPS(
                json.data.Table[0].CenterLatitude,
                json.data.Table[0].CenterLongitude
              ));
              checkCordinates(data,json.data.Table[0].CenterLatitude,json.data.Table[0].CenterLongitude)
              .then(
                (value)=> dispatch(
                  setAvailabity(`${value} at ${json.data.Table[0].Street}, ${json.data.Table[0].Area}` ))
              )
            }else {
               dispatch(addressNotFound());
            }
          }
        )

      }else{
        console.log("incorrect address");
      }
  }

  const handleChange=(e)=>{
     setAddress(e.target.value);
  }

  const handleClick =()=>{
    dispatch(gpsLocate());
    navigator.geolocation.getCurrentPosition(function(position){

       if (position.coords.accuracy <= 25) { // check if proximity is less than or equal to 25 accuracy
           dispatch(plotGPScoords(position.coords));
           checkCordinates(data,position.coords.latitude, position.coords.longitude).then(
             (value)=> dispatch(setAvailabity(value))
           )
       }else{

         dispatch(setGPSFailed("Sorry, GPS proximity exceeds 25m, use Ghana Post GPS address instead"));
       }

    },function(error){
        dispatch(setGPSFailed("Sorry, kindly ensure your GPS permission is enabled. Refresh page and try again"));
    });


  }
  return(
    <div id="map" className="map-input">
     <div className="field has-addons">
          <p className="control">
            <input className="input is-info "onChange={(e)=> handleChange(e)}
            onKeyDown={(e)=>handleKeyDown(e)} type="text" placeholder="eg. GA-052-4634" />
          </p>
          <p className="control"><button onClick={handleCheck} className="button is-info">check </button></p>

     </div>
      <GPSAndProgress handleClick={handleClick} status={state.search} found={state.address_found}/>
    </div>
  )
}

export default MapInput;
