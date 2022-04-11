import {usersApi} from "../../api/api";
import {updateObjectInArray} from "../../utility/objectHelpers";

const addUser = 'ADD-USER'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialUsers = {
  users: [],
  countUser: 5,
  totalCount: 15000,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}


const usersReducer = (state = initialUsers, action) => {

  switch (action.type) {
    case addUser : {
      return {
        ...state,
        users: [...state.users, {id: 4, name: 'Ashot', photos: {small: null}, followed: false,}]
      }
    }
    case FOLLOW:
      return {
        ...state,
       users: updateObjectInArray(state.users,"id",action.userId , {followed:true} ),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,"id",action.userId , {followed:false} ),
      }

    case SET_USERS: {

      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {

      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_IS_FETCHING: {

      return {
        ...state, isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING: {

      return {
        ...state,
        followingInProgress: action.followProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }


    default:
      return state;
  }
}

export default usersReducer;

export let addUserAction = () => ({type: addUser})
export let follow = (userId) => ({type: FOLLOW, userId})
export let unfollow = (userId) => ({type: UNFOLLOW, userId})
export let setUser = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let isFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export let isToggleFollowAC = (followProgress, userId) => ({type: TOGGLE_IS_FOLLOWING, followProgress, userId})


export const getUsers = (currentPage, countUser) => async (dispatch) => {
  const response = await usersApi.renderUser(currentPage, countUser)
  dispatch(isFetchingAC(true));
  dispatch(isFetchingAC(false));
  dispatch(setUser(response.items));
  dispatch(setCurrentPage(currentPage))

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(isToggleFollowAC(true, userId));
  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(isToggleFollowAC(false, userId));
}

export const followThunk = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollowPost.bind(usersApi), follow);
  }
}

export const unFollowThunk = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.followPost.bind(usersApi), unfollow);

  }
}