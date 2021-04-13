import { useState } from "react";
import {setPinnedLocation,validCoordinate} from "./util";
import data from "./data"
import { useMapContext } from "../../map-context";



const MapInput=()=>{
  const [latLng, setLatLng] =useState("");
  const [state, setState] = useMapContext();

  let coordinates;
  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
        handleClick()
    }
  }
  const handleChange=(e)=>{
     setLatLng(e.target.value);
  }
  const handleClick =()=>{
    if(latLng!==""){
          try{
            setPinnedLocation(validCoordinate(latLng),setState,data);
            setState(oldState=>({...oldState,marker:true,zoom:15}))
          }catch(error){
            console.error(error);
          }
    }else{
      console.log("field cant be empty");
    }
  }
  return(
    <div className="map-input">
     <div className="field has-addons ">
        <p className="control">
          <input className="input is-info "onChange={(e)=> handleChange(e)}
          onKeyDown={(e)=>handleKeyDown(e)} type="text" placeholder="Enter coordinates(lat,lng)" />
        </p>
        <p className="control"><button onClick={(e)=>handleClick()} className="button is-info">Check</button> </p>
     </div>

    </div>
  )
}

export default MapInput;
