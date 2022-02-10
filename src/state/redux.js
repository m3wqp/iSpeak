import {combineReducers, createStore} from "redux";
import dialogReducer from "./reducers/dialogReducer";
import postReducer from "./reducers/postReducer";
import navbarReducer from "./reducers/navbarReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
  dialogCon: dialogReducer,
  postCon: postReducer,
  navbar: navbarReducer,
  profileCon: profileReducer,
  users: usersReducer,
});

let store = createStore(reducers);


export default store;