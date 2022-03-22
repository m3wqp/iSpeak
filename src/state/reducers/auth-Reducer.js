import {usersApi} from "../../api/api";
import {stopSubmit} from "redux-form";



const SET_USER_DATE = "SET_USER_DATE";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;

  }
}

export const setUserDate = (id, email, login, isAuth) => ({type: SET_USER_DATE, data: {id, email, login, isAuth}})

export const setUser = () => (dispatch) => {

 return  usersApi.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserDate(id, email, login, true))

      }
    });

}
export const login = (email, password, rememberMe) => (dispatch) => {

  usersApi.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUser())
      }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("loginForm" , {_error: message}))
      }
    });
}
export const logout = () => (dispatch) => {
  usersApi.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserDate(null, null, null, false))
      }
    });
}


export default authReducer;




