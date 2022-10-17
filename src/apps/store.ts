import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authenSlice  from "../slices/Authen/authenSlice";
import counterSlice from "../slices/Counter/counterSlice";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  counter:counterSlice,
  authen:authenSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:[thunk]
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
//export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch