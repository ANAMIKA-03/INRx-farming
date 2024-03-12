import {APIURL} from '../../utils/constants';

export function getUserDetails(apiKey:String) {
  return fetch(APIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({apiKey: apiKey}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in getUserDetails()::apis.tsx');
    });
}
