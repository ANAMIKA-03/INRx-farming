export interface TRANSFERTOKEN {
  mobile: String;
  amount: number;
  reciever: string;
  blockchain: string;
  coin: string;
  tokenId: String;
  userId: String;
}

export interface WITHDRAWLIST {
  amount: number;
  reciever: string;
  type: string;
  icon: string;
  createdAt: string;
  symbol: string;
}

export interface CONVERTTOKENPARAMS {
  mobile: String;
  token: String;
  sendToken: String;
  recieveToken: String;
  sendAmount: number;
  recieveAmount: number;
}

export interface STAKETOKEN {
  mobile: String;
  symbol: String;
  amount: String;
  tokenId:String;
}

export interface  GETDATA{
  mobile: String;
  tokenId:String;
}