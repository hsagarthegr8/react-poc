import { createStore, combineReducers } from "redux";
import { authReducer } from "../components/Login/reducer";

const reducer = combineReducers({
  auth: authReducer
});

const store = createStore(reducer);

export default store;
