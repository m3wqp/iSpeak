import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./reducers/dialogReducer";
import postReducer from "./reducers/postReducer";
import navbarReducer from "./reducers/navbarReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/auth-Reducer";
import headerReducer from "./reducers/headeReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  dialogCon: dialogReducer,
  postCon: postReducer,
  navbar: navbarReducer,
  profileCon: profileReducer,
  users: usersReducer,
  auth: authReducer,
  header: headerReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;