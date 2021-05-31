import { useState } from "react";
import { checkCordinates, setPinnedLocation} from "./util";
import data from "./data"
import { useMapContext } from "../../map-context";
import ghanaPostGPS from "../../../ghpostgps-address/index";

//plot and check fibre availability with ghanaPostGPS address
const plotCoordinateAndCheck=(latLng,setState,urlencoded)=>{
  if(latLng!==""){
        urlencoded.append("address", latLng);
        setState(old=>({...old,search:true}))
        // translating GhanaPostGPS address
        ghanaPostGPS(urlencoded.toString())
        .then(json=>{
            if(json.found){
                setState( old=>({
                  ...old,
                  search:false,
                  marker:true,
                  coordinates:{
                    lat: json.data.Table[0].CenterLatitude,
                    lng:json.data.Table[0].CenterLongitude
                  },


                }));

                // check fibre
                checkCordinates(data,
                  {
                    lat:json.data.Table[0].CenterLatitude,
                    lng:json.data.Table[0].CenterLongitude
                  }
                ).then((value)=> setState((oldState)=>
                  ({...oldState, status:value,zoom:15 })));

          }

        }).catch((err)=>{
            console.log("kindly check your internet connection");
        })
        // try{
        //   setPinnedLocation(validCoordinate(latLng),setState,data);
        // }catch(error){
        //   console.error(error);
        // }
  }else{
    console.log("field cant be empty");
  }
}

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
  const [state , setState] = useMapContext();

  const handleKeyDown =(e)=>{
    if (e.code ==="Enter") {
        handleCheck(e);
    }
  }

  const handleCheck=(e)=>{
    plotCoordinateAndCheck(latLng,setState,urlencoded);
  }
  const handleChange=(e)=>{
     setLatLng(e.target.value);
  }

  const handleClick =()=>{
    setState(old=>({...old,search:true}));
    navigator.geolocation.getCurrentPosition(function(position){
      setState( old=>({
        ...old,
        search:false,
        marker:true,
        coordinates:{
          lat: position.coords.latitude ,
          lng: position.coords.longitude
        }
      }));

      checkCordinates(data,
        {
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }
      ).then((value)=> setState((oldState)=>
        ({...oldState, status:value,zoom:15 })));

    },(error)=> console.log(error));
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
