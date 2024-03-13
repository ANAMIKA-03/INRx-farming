import {AUTH_API_URL, TRUSTAPP_API, WALLET_API_URL} from '../../../env';

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

export function fetchUser(mobile: String) {
  return fetch(AUTH_API_URL + '/fetch-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile: mobile}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in checkUser()::apis.tsx');
    });
}

export function createWallet(mobile: String) {
  return fetch(WALLET_API_URL + '/create-wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile:mobile}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in createWallet()::apis.tsx');
    });
}
