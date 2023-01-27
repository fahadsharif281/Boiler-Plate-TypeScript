import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './reducers/userReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
};

const reducers = combineReducers({
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: {
        root: persistedReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
