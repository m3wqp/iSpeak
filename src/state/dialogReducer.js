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
      let newMessage = {
        id: 4,
        message: action.message
      }
      let stateCopy = {...state}
      stateCopy.userMessage = [...state.userMessage]
      stateCopy.userMessage.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newMessage
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = (valueMessageElement) => ({type: ADD_MESSAGE, message: valueMessageElement})
export const onMessageChangeActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage})

export default dialogReducer;