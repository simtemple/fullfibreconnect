import buffer from "@turf/buffer";
import union from "@turf/union";
import {point} from "@turf/helpers";
import booleanIntersect from "@turf/boolean-intersects";

const regexNum =/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;

function validCoordinate(latLng){
  if(regexNum.exec(latLng)){
    let [lat,lng]= latLng.split(",");
    return isLatitude(lat) && isLongitude(lng)
            ? {
              lat:parseFloat(lat),
              lng:parseFloat(lng),
              valid:true
            }
            :{ valid:false};

  }
  return {valid:false};
}

function setPinnedLocation({valid,lat,lng},setState,data){
  if(valid){
    setState(
    (data)=>({...data,
      marker:true,
      coordinates:{
        lat:lat,
        lng:lng
      },
      status:"checking..."
    }));
    checkCordinates(data,{lat:lat,lng:lng}).then(
      (value)=> setState((oldState)=>
        ({...oldState, status:value,zoom:15 }))
    )
  }else {
    throw new Error("invalid coordinates");
  }
}


function checkCordinates(data,lat,lng){
    const pt = point([lng,lat]);
    const bufferPoint = buffer(pt, 0.001);

    return new Promise((resolve,reject)=>{
    setTimeout(() => {
          //iterate over given data
          for (let i = 0; i < data.features.length; i++) {
            if(data.features[i].properties && data.features[i].geometry.type === "Polygon"){
              if(union(data.features[i] , bufferPoint).geometry.type === "Polygon"){
                 resolve("Available");
              }
            } if(data.features[i].properties && data.features[i].geometry.type === "LineString"){
              if(booleanIntersect(buffer(data.features[i],0.02), bufferPoint)){
                 resolve("Available");
              }

            }

          }
          resolve("Not Available");

        }, 1000);
    })
}

function filterGeoJson(feature){
    if (feature.properties && feature.geometry.type === "Point") {
        return false;
    }
    return true;

}

export { checkCordinates,setPinnedLocation,validCoordinate , filterGeoJson}
