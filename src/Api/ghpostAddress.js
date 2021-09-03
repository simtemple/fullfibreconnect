/* Ghana Post address engineering was done by sperixlabs.org */

const URL = "https://ghanapostgps.sperixlabs.org";
const urlencoded = new URLSearchParams();

async function getAddress(address){  
  
  urlencoded.set("address", address)
  let options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:urlencoded.toString(),
  };

  return await fetch(URL, options).then(data=>data.json())

}

export default getAddress;
