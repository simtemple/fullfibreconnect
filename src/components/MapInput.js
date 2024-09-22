import { useState } from "react";
import { checkCordinates } from "../util";
import data from "./LeafletMap/data"
import translateGPSAdress from "../api/PostCode";
import { useDispatch, useStore } from "../global-state";
import {
  plotGPScoords,
  plotUKGPS,
  setAvailability,
  setGPSFailed as locationStatus,
  gpsLocate,
  addressNotFound
} from "../global-state/actions";


const GhpostValidationReg = /^[a-zA-Z][a-zA-Z0-9](-\d{3,4})(-\d{4})/

const GPSAndProgress=({handleClick, status })=>{

  return(
    <div className="buttons is-group">
      <button onClick={ handleClick } className="button is-info">use GPS</button>
      { status ?(<button className="button is-info is-loading"></button>):null }
    </div>
  )
}

const MapInput=()=>{
  const [address, setAddress] =useState("");
  const state = useStore();
  const dispatch = useDispatch();

  const plotsAndCheckAvailability= async (json)=>{
      if(json.found){
        dispatch(plotGhanaGPS(
          json.data.Table[0].CenterLatitude,
          json.data.Table[0].CenterLongitude
        ));

        const value = await checkCordinates(data,json.data.Table[0].CenterLatitude,json.data.Table[0].CenterLongitude)
        dispatch(setAvailability(`${value} at ${json.data.Table[0].Street}, ${json.data.Table[0].Area}` ))
        
      }else {
         dispatch(addressNotFound());
      }
    
  }
  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
        handleCheck(e);
    }
  }

  const handleCheck=(e)=>{
      if(PostCodeValidationReg.test(address)){
        dispatch(gpsLocate());
        translateGPSAdress(
          address, 
          plotsAndCheckAvailability,
          ()=>dispatch(locationStatus("Something went wrong. Kindly check your internet connection and try again"))
        );

      }else{
       dispatch(locationStatus("Incorrect Address"));
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
             (value)=> dispatch(setAvailability(value))
           )
       }else{

         dispatch(locationStatus("Sorry, GPS proximity exceeds 25m, use Ghana Post GPS address instead"));
       }

    },function(error){
        dispatch(locationStatus("Sorry, kindly ensure your GPS permission is enabled. Refresh page and try again"));
    },{ enableHighAccuracy:true });


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
