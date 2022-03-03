const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

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

  proFilePost:null,

}
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postText: '',
        postData: [...state.postData, {id: 5, name: 'Anton', lastname: 'Ml-bb', post: state.postText}]
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
    default:
      return state;
  }


}

export const onPostChangeActionCreator = (inputValue) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue})
export const addPostActionCreator = () => ({type: ADD_POST})
export const setProfile = (newProfile) => ({type: SET_PROFILE , newProfile})

export default postReducer;