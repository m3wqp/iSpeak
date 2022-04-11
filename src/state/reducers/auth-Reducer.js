import {usersApi} from "../../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATE = "SET_USER_DATE";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTCHA_URL:
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL,data:{captchaUrl}})

export const setUser = () => async (dispatch) => {
  let response = await usersApi.me()

  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setUserDate(id, email, login, true))
  }
}

export const login = (email, password, rememberMe,captcha) => async (dispatch) => {

  let response = await usersApi.login(email, password, rememberMe,captcha)

  if (response.data.resultCode === 0) {
    dispatch(setUser())
  }
  else {
    if(response.data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
    dispatch(stopSubmit("loginForm", {_error: message}))
  }
}

export const logout = () => async (dispatch) => {
  let response = await usersApi.logout()

  if (response.data.resultCode === 0) {
    dispatch(setUserDate(null, null, null, false))
  }
}
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await usersApi.getCaptchaUrl()
  const captchaUrl = response.data.url;
dispatch(getCaptchaUrlSuccess(captchaUrl))

}


export default authReducer;




