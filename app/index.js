import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import colors from './config/colors';
import App from './navigation/index';
import configureStore from './redux/store';

export default function index() {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <StatusBar translucent backgroundColor={colors.primary} barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}