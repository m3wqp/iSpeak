import {statusAPI, usersApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO_UPDATE = 'SET_PHOTO_UPDATE'

let initialState = {

  postData: [
    {
      id: 1,
      name: 'Regina',
      lastname: 'Aps',
      post: 'Имитация комментаторов'
    },
    {
      id: 2,
      name: 'Vlad',
      lastname: 'Kul',
      post: 'body'
    },
    {
      id: 3,
      name: 'Aiy',
      lastname: 'Kek',
      post: 'nobody'
    }
  ],

  proFilePost: null,

  status: "",

}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [...state.postData, {id: 5, name: 'Anton', lastname: 'Ml-bb', post: action.newPostText}]
      }
    }

    case UPDATE_NEW_POST_TEXT : {

      return {
        ...state, postText: action.newText
      }
    }
    case SET_PROFILE : {

      return {
        ...state, proFilePost: action.newProfile
      }
    }
    case SET_PHOTO_UPDATE : {

      return {
        ...state, proFilePost: {...state.proFilePost, photos: action.photos}
      }
    }
    case SET_USER_STATUS : {
      return {
        ...state, status: action.status
      }
    }
    default:
      return state;
  }


}

export const onPostChangeActionCreator = (inputValue) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue})
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (newProfile) => ({type: SET_PROFILE, newProfile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO_UPDATE, photos})


export const setProfilePost = (userId) => async (dispatch) => {
  const response = await usersApi.postProfile(userId)
  dispatch(setProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await statusAPI.getStatus(userId)
  dispatch(setUserStatus(response.data))
}


export const updateStatus = (status) => async (dispatch) => {
  const response = await statusAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }

}
export const savePhoto = (file) => async (dispatch) => {
  const response = await statusAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }

}
export const saveFormProfile = (formData) => async (dispatch, setState) => {
  const userId = setState().auth.id
  const response = await statusAPI.saveProfile(formData)
  if (response.data.resultCode === 0) {
    dispatch(setProfilePost(userId))
  }else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0]);
  }

}


export default postReducer;