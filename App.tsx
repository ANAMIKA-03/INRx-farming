import React from 'react';
import Root from './Src/setup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DeepLink from './Src/hooks/DeepLink';
import {Provider} from 'react-redux';
import { store } from './Src/Services/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DeepLink>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </DeepLink>
    </Provider>
  );
};
export default App;
