const addUser = 'ADD-USER'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialUsers = {
  users: [
    {
      id: 1,
      name: 'vlad',
      lastname: 'Rew',
      followed: false,
    },
    {
      id: 2,
      name: 'Andrew',
      lastname: 'Rew',
      followed: false,
    },
    {
      id: 3,
      name: 'Solo',
      lastname: 'Rew',
      followed: true,
    },
  ]
}



const usersReducer = (state = initialUsers, action) => {

  switch (action.type) {
    case addUser : {

      return {
        ...state,
        users: [...state.users, {id: 4 , name: 'Ashot', lastname: 'Fer', followed: false,}]
      }
    }
    case FOLLOW:{
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
              return{...user, followed:true}
          }
          return user;
        })
      }
    }
    case UNFOLLOW:{
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return{...user, followed:false}
          }
          return user;
        })
      }
    }
    case SET_USERS:{
      return {
        ...state,
        users: [...state.users,...action.users]
      }
    }
    default:
      return state 
  }
}

export default usersReducer;

export let addUserActionCreator = () => ({type: addUser})
export let followAC = (userId) => ({type: FOLLOW, userId})
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUserAC = (users) => ({type: SET_USERS, users})