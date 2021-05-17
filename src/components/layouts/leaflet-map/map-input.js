import { useState } from "react";
import {setPinnedLocation,validCoordinate} from "./util";
import data from "./data"
import { useMapContext } from "../../map-context";



const MapInput=()=>{
  const [latLng, setLatLng] =useState("");
  const [gps, setGPS] = useState("Use GPS")
  const [ , setState] = useMapContext();

 
  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
      if(latLng!==""){
            try{
              setPinnedLocation(validCoordinate(latLng),setState,data);
            }catch(error){
              console.error(error);
            }
      }else{
        console.log("field cant be empty");
      }

    }
  }
  const handleChange=(e)=>{
     setLatLng(e.target.value);
  }
  const handleClick =()=>{
    setGPS("loading...")
    navigator.geolocation.getCurrentPosition(function(position){
      setPinnedLocation(
        {
          valid:true,
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }
        ,setState,data);
     setGPS("done,use GPS again");
    },(error)=> setGPS("failed !") );
  }
  return(
    <div id="map" className="map-input">
     <div className="field">
          <input className="input is-info "onChange={(e)=> handleChange(e)}
          onKeyDown={(e)=>handleKeyDown(e)} type="text" placeholder="Enter coordinates(lat,lng)" />

        <button onClick={(e)=>handleClick()} className="button is-info">{gps}</button>
     </div>

    </div>
  )
}

export default MapInput;
