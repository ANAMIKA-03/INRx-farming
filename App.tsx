import React from 'react';
import Root from './Src/setup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DeepLink from './Src/hooks/DeepLink';
import {Provider} from 'react-redux';
import {persistor, store} from './Src/Services/Redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DeepLink>
          <SafeAreaProvider>
            <Root />
          </SafeAreaProvider>
        </DeepLink>
      </PersistGate>
    </Provider>
  );
};
export default App;
