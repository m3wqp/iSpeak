import {usersApi} from "../../api/api";

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
  totalCount: 50,
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
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }
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


export const getUsers = (currentPage, countUser) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true));
    usersApi.renderUser(currentPage, countUser)
      .then(response => {
        dispatch(isFetchingAC(false));
        dispatch(setUser(response.items));
        dispatch(setCurrentPage(currentPage))
      })
  }
}

export const followThunk = (userId) => {

  return (dispatch) => {
    dispatch(isToggleFollowAC(true, userId));

    usersApi.unfollowPost(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(follow(userId))
        }
        dispatch(isToggleFollowAC(false, userId));
      })
  }
}

export const unFollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(isToggleFollowAC(true, userId))
    usersApi.followPost(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollow(userId))
        }
        dispatch(isToggleFollowAC(false, userId));
      })

  }

}