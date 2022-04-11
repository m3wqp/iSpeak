const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {

  userMessage: [
    {id: 1, name: "Me", message: 'Добрый день! Я Только начинаю свой путь во Frontend'},
    {id: 4, name: "Me", message: 'В Поисках Развития и Интересных задач'},
  ],


}


const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      return {
        ...state,
        userMessage: [...state.userMessage, {id: 4, name: "Me", message: action.message}]
      }

    }

    default:
      return state;
  }
}

export const addMessageActionCreator = (valueMessageElement) => ({type: ADD_MESSAGE, message: valueMessageElement})


export default dialogReducer;