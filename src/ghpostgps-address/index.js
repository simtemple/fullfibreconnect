/* Ghana Post address engineering was done by sperixlabs.org */

const URL = "https://ghanapostgps.sperixlabs.org";


async function getAddress(urlencoded){
  let options = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:urlencoded,
  };

  return await fetch(URL, options).then(data=>data.json())

}

export default getAddress;
