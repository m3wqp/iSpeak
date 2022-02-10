const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

  userMessage: [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Аууу'},
    {id: 3, message: 'Как дела'},
    {id: 4, message: 'Очнись'},
  ],
  newMessageText: ''

}


const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      return {
        ...state,
        newMessageText: '',
        userMessage: [...state.userMessage, {id: 4, message: state.newMessageText}]
      }

    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newMessage
      }
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = (valueMessageElement) => ({type: ADD_MESSAGE, message: valueMessageElement})
export const onMessageChangeActionCreator = (inputValue) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: inputValue})

export default dialogReducer;