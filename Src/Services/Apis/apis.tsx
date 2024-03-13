import {AUTH_API_URL, TRUSTAPP_API} from '../../../env';

export function getUserDetails(apiKey: String) {
  return fetch(TRUSTAPP_API, {
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

export function createUser(data: any) {
  return fetch(AUTH_API_URL + '/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in createUser()::apis.tsx');
    });
}
