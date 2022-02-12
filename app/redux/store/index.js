import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from '../reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const middleware = [];

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, reducer);

// Assemble Middleware
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
// console.log('Test', store.getState());
});
const configureStore = () => ({ persistor, store });

// sagaMiddleware.run();
export default configureStore;