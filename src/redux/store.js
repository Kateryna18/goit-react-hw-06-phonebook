import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as rootReducer } from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
