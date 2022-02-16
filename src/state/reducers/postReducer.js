const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  postText: ''

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
    default:
      return state;
  }


}

export const onPostChangeActionCreator = (inputValue) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue})
export const addPostActionCreator = () => ({type: ADD_POST})

export default postReducer;