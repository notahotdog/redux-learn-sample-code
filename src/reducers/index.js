import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer, //key can be set to anything i.e counterRed : counterReducer , value must point to the reducer
  isLogged: loggedReducer,
});

export default allReducers;
