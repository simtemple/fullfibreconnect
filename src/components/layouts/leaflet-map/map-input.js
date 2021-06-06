import { useState } from "react";
import { checkCordinates } from "../../../util";
import data from "./data"
import ghanaPostGPS from "../../../ghpostgps-address/index";
import { useStore } from "../../../global-state";
import {
  plotGPScoords,
  setAvailabity
} from "../../../global-state/action";



const GPSAndProgress=({handleClick, status})=>{

  return(
    <div className="buttons is-group">
      <button onClick={ handleClick } className="button is-info">use GPS</button>
      { status ?(<button className="button is-info is-loading"></button>):null }
    </div>
  )
}
const MapInput=()=>{
  const urlencoded = new URLSearchParams();
  const [latLng, setLatLng] =useState("");
  const [state, dispatch ] = useStore();


  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
        handleCheck(e);
    }
  }

  const handleCheck=(e)=>{

  }
  const handleChange=(e)=>{
     setLatLng(e.target.value);
  }

  const handleClick =()=>{
    dispatch({type:"locate/gps"});
    navigator.geolocation.getCurrentPosition(function(position){
       if (position.coords.accuracy <= 25) {
           dispatch(plotGPScoords(position.coords));
           checkCordinates(data,{lat:position.coords.latitude,lng:position.coords.longitude}).then(
             (value)=> dispatch(setAvailabity(value))
           )
       }else {
         console.log("accuracy exceeds 25");
       }

    });


  }
  return(
    <div id="map" className="map-input">
     <div className="field has-addons">
          <p className="control">
            <input className="input is-info "onChange={(e)=> handleChange(e)}
            onKeyDown={(e)=>handleKeyDown(e)} type="text" placeholder="Enter coordinates(lat,lng)" />
          </p>
          <p className="control"><button onClick={handleCheck} className="button is-info">check </button></p>

     </div>
      <GPSAndProgress handleClick={handleClick} status={state.search} />
    </div>
  )
}

export default MapInput;
