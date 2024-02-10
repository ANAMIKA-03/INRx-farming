
import React, { useEffect } from 'react';
import Root from './Src/setup';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {

  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};
export default App;