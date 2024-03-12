import {Linking} from 'react-native';
import React, {createContext, useContext, useEffect, useState} from 'react';
const DeepLinkContext = createContext({});

const DeepLink = ({children}: any) => {
  const [deeplink, setDeepLink] = useState({});

  useEffect(() => {
    const handleDeepLink = (url: any) => {
      // console.log('Received deep link:', url);
      setDeepLink(url);
    };

    // Add event listener for deep links
    const handleUrlEvent = ({url}: any) => {
      handleDeepLink(url);
    };
    Linking.addEventListener('url', handleUrlEvent);

    // Get initial URL when the app starts
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink(url);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  return (
    <DeepLinkContext.Provider value={{deeplink, setDeepLink}}>
      {children}
    </DeepLinkContext.Provider>
  );
};

export const useDeepLink = () => useContext(DeepLinkContext);
export default DeepLink;
