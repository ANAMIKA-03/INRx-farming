import {AUTH_API_URL, TRUSTAPP_API, WALLET_API_URL} from '../../../env';
import {CONVERTTOKENPARAMS, TRANSFERTOKEN} from '../../utils/constants';

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

export function fetchWallet(mobile: String) {
  return fetch(WALLET_API_URL + '/fetch-wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile: mobile}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in fetchWallet()::apis.tsx');
    });
}

export function updateBalance(mobile: String) {
  return fetch(WALLET_API_URL + '/update-wallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile: mobile}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in updateBalance()::apis.tsx');
    });
}

export function transferToken(data: TRANSFERTOKEN) {
  return fetch(WALLET_API_URL + '/transfer-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({...data}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in transferToken()::apis.tsx');
    });
}

export function withdrawList(mobile: String) {
  return fetch(WALLET_API_URL + '/withdraw-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile: mobile}),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in withdrawList()::apis.tsx');
    });
}

export function getTokenPriceInINR(token:string) {
  const final_third_party_api_url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${token}&convert=INR`;

  return fetch(final_third_party_api_url, {
    headers: {
      "Content-Type": "Application/json",
      "X-CMC_PRO_API_KEY": "cce264e5-5460-4b08-9bd3-2256aef37446",
    },
  })
    .then((res) => res.json())

    .catch((e) => {
      console.log(e, "Erro in inr price fetch api");
    });
}

export function convertToken(data: CONVERTTOKENPARAMS) {
  return fetch(WALLET_API_URL + '/convert-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in withdrawList()::apis.tsx');
    });
}