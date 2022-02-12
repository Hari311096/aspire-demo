import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './navigation/index';
import configureStore from './redux/store';

export default function index() {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}