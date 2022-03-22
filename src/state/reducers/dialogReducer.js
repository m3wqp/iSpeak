const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {

  userMessage: [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Аууу'},
    {id: 3, message: 'Как дела'},
    {id: 4, message: 'Очнись'},
  ],


}


const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      return {
        ...state,
        newMessageText: '',
        userMessage: [...state.userMessage, {id: 4, message: action.message}]
      }

    }

    default:
      return state;
  }
}

export const addMessageActionCreator = (valueMessageElement) => ({type: ADD_MESSAGE, message: valueMessageElement})


export default dialogReducer;