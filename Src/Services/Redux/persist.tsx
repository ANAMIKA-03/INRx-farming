import { MMKV } from "react-native-mmkv";
import { Storage } from "redux-persist";

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value: any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: any) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: any) => {
    storage.delete(key);
    return Promise.resolve();
  },
};