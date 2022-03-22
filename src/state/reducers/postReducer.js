import {statusAPI, usersApi} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {

  postData: [
    {
      id: 1,
      name: 'Regina',
      lastname: 'Aps',
      post: 'HELLO LOVE'
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

  postText: '',

  proFilePost: null,

  status: "",

}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postText: '',
        postData: [...state.postData, {id: 5, name: 'Anton', lastname: 'Ml-bb', post: action.newPostText}]
      }
    }

    case UPDATE_NEW_POST_TEXT : {

      return {
        ...state,
        postText: action.newText
      }
    }
    case SET_PROFILE : {

      return {
        ...state, proFilePost: action.newProfile
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


export const setProfilePost = (userId) => {
  return (dispatch) => {
    usersApi.postProfile(userId)
      .then(response => {
        dispatch(setProfile(response.data))
      })
  }
}
export const getStatus = (userId) => {
  return (dispatch) => {
    statusAPI.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response.data))
      })
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    statusAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      })
  }
}


export default postReducer;