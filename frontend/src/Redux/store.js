import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
<<<<<<< HEAD
import { initialvalue, reducer } from './HomeReducer.jsx/reducer';


export const store = legacy_createStore(reducer,initialvalue );

console.log(store)
=======
import thunk from 'redux-thunk'
import { reducer as productReducer } from './ProductReducer/reducer'; 

const rootReducer = combineReducers({
    productReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> main
