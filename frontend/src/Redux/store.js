import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { initialvalue, reducer } from './HomeReducer.jsx/reducer';


export const store = legacy_createStore(reducer,initialvalue );

console.log(store)