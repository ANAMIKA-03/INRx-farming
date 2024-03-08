import React from 'react';
import Root from './Src/setup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DeepLink from './Src/hooks/DeepLink';

const App = () => {
  return (
    <DeepLink>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </DeepLink>
  );
};
export default App;
