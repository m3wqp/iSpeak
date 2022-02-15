const addUser = 'ADD-USER'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialUsers = {
  users: [ ],
  countUser: 5,
  totalCount: 50,
  currentPage: 1,
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
        users:  action.users
      }
    }
    case SET_CURRENT_PAGE: {

      return {
        ...state,
         currentPage: action.currentPage
      }
    }
    default:
      return state;
  }
}

export default usersReducer;

export let addUserActionCreator = () => ({type: addUser})
export let followAC = (userId) => ({type: FOLLOW, userId})
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUserAC = (users) => ({type: SET_USERS, users})
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})