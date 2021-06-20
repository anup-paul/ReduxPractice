import {applyMiddleware, combineReducers, createStore} from "redux";
import CountryReducer from "./Reducers/CountryReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import BookReducer from "./Reducers/BookReducer";


const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
    countries:CountryReducer,
    books:BookReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware));