import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import postReducer from "./postReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  dialogCon: dialogReducer,
  postCon: postReducer,
  navbar: navbarReducer,
  profileCon: profileReducer,
});

let store = createStore(reducers);


export default store;