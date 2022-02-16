const addUser = 'ADD-USER'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialUsers = {
  users: [ ],
  countUser: 5,
  totalCount: 50,
  currentPage: 1,
  isFetching : true,
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

    case SET_IS_FETCHING: {

      return {
        ...state, isFetching: action.isFetching
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