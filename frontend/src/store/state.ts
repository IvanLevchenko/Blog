// import { combineReducers, createStore, ReducersMapObject } from 'redux';
// import userReducer from './userReducer';

// const reducers = combineReducers<ReducersMapObject>({
//   user: userReducer
// })

// export const state = createStore(reducers)

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const state = configureStore({
  reducer: {
    user: userReducer
  }
})