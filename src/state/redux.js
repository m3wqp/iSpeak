import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./reducers/dialogReducer";
import postReducer from "./reducers/postReducer";
import navbarReducer from "./reducers/navbarReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/auth-Reducer";
import headerReducer from "./reducers/headeReducer";
import thunkMiddleware from "redux-thunk";
import {reducer} from "redux-form";
import appReducer from "./reducers/appReducer";


let reducers = combineReducers({
  dialogCon: dialogReducer,
  postCon: postReducer,
  navbar: navbarReducer,
  profileCon: profileReducer,
  users: usersReducer,
  auth: authReducer,
  header: headerReducer,
  form: reducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
  applyMiddleware(thunkMiddleware)
));


export default store;