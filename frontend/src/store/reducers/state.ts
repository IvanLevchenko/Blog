import { combineReducers, createStore, ReducersMapObject } from 'redux';
import userReducer from './userReducer';

const reducers = combineReducers<ReducersMapObject>({
  user: userReducer
})

export const state = createStore(reducers)
