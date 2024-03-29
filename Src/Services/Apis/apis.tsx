import {AUTH_API_URL, STAKE_API_URL, TRUSTAPP_API, WALLET_API_URL} from '../../../env';
import {CONVERTTOKENPARAMS, GETDATA, STAKETOKEN, TRANSFERTOKEN} from '../../utils/constants';

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

export function logOutUser(data: any) {
  return fetch(AUTH_API_URL + '/logout-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in logOutUser()::apis.tsx');
    });
}

export function saveFCMToken(data: any) {
  return fetch(AUTH_API_URL + '/save-fcmtoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in saveFCMToken()::apis.tsx');
    });
}

export function fetchUser(mobile: String,tokenId:String) {
  return fetch(AUTH_API_URL + '/fetch-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify({mobile: mobile,tokenId:tokenId}),
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
  console.log(final_third_party_api_url,' api');
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

export function stakeINRXToken(data: STAKETOKEN) {
  return fetch(STAKE_API_URL + '/stake-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in stakeToken()::apis.tsx');
    });
}

export function getStakeData(data: GETDATA) {
  return fetch(STAKE_API_URL + '/get-all-stakes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in getStakeData()::apis.tsx');
    });
}

export function claimReward(data: GETDATA) {
  return fetch(STAKE_API_URL + '/claim-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in claimReward()::apis.tsx');
    });
}

export function swapHistory(data: GETDATA) {
  return fetch(WALLET_API_URL + '/convert-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in claimReward()::apis.tsx');
    });
}

export function claimHistory(data: GETDATA) {
  return fetch(STAKE_API_URL + '/claim-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'allow-access-control-origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e, 'Error in claimReward()::apis.tsx');
    });
}