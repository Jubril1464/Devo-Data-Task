// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/taskSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
});
const persistor = persistStore(store);


export {store, persistor};