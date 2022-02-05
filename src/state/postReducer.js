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
      let newPost = {
        id: 5,
        name: 'Anton',
        lastname: 'Ml-bb',
        post: state.postText
      };
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData]
      stateCopy.postData.push(newPost);
      stateCopy.postText = ''
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT : {
      let stateCopy = {...state}
      stateCopy.postText = action.newText
      return stateCopy;
    }
    default:
      return state;
  }


}

export const onPostChangeActionCreator = (inputValue) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue})
export const addPostActionCreator = () => ({type: ADD_POST})

export default postReducer;