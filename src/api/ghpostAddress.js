/* OFCOM */

const URL = "https://api-proxy.ofcom.org.uk";
const urlencoded = new URLSearchParams();
const methodAndHeaders = {
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
async function getAddress(address,successful, failed){  
  
  urlencoded.set("address", address)
  let options = {
    ...methodAndHeaders,
    body:urlencoded.toString(),
  };

  try{
    const json = await fetch(URL, options).then(data=>data.json())
    successful(json);
  }catch{
    failed();
  }finally{
      //stop progress bar here
  }
  

}

function findAddressWithCoords(coords) {
  urlencoded.set("lat", coords.latitude.toString());
  urlencoded.set("long", coords.longitude.toString());
  let options = {
    ...methodAndHeaders,
    body:urlencoded.toString(),
  };


  return (fetch("https://api-proxy.ofcom.org.uk/broadband/coverage/{PostCode}", options )
  .then(response => response.json()))

  
}

export { findAddressWithCoords };
export default getAddress;
