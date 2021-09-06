/* Ghana Post address engineering was done by sperixlabs.org */

const URL = "https://ghanapostgps.sperixlabs.org";
const urlencoded = new URLSearchParams();
const methodAndHeaders = {
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
async function getAddress(address){  
  
  urlencoded.set("address", address)
  let options = {
    ...methodAndHeaders,
    body:urlencoded.toString(),
  };

  return await fetch(URL, options).then(data=>data.json())

}

function findAddressWithCoords(coords) {
  urlencoded.set("lat", coords.latitude.toString());
  urlencoded.set("long", coords.longitude.toString());
  let options = {
    ...methodAndHeaders,
    body:urlencoded.toString(),
  };


  return (fetch("https://ghanapostgps.sperixlabs.org/get-address", options )
  .then(response => response.json()))

  
}

export { findAddressWithCoords };
export default getAddress;
