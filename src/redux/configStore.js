import { createStore, combineReducers, applyMiddlewares, compose } from "redux";
import { users } from "./modules/users";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers();

const enhancer = applyMiddlewares(...middlewares);

const store = createStore(roodReducer, enhancer);

export default store;