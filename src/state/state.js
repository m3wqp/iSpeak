import postReducer from "./reducers/postReducer";
import dialogReducer from "./reducers/dialogReducer";


let store = {
  _state: {

    userProfile: [
      {id: 1, user: 'Влад'},
      {id: 2, user: 'Регина'},
      {id: 3, user: 'Айя'},
      {id: 4, user: 'Богдан'},
    ],


    message: {
      userMessage: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Аууу'},
        {id: 3, message: 'Как дела'},
        {id: 4, message: 'Очнись'},
      ],
      newMessageText: ''
    },




    navBar: [
      {link: '/', name: 'Сообщество'},
      {link: '/dialogs', name: 'Диалоги'},
      {link: '/posts', name: 'Записи'},
    ]
  },
  getState() {
    return this._state
  },
  rerenderEntireTree() {
    console.log('Изменил')
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },


  dispatch(action) {

    this._state.dataState = postReducer(this._state.dataState, action)
    this._state.message = dialogReducer(this._state.message, action)
    this.rerenderEntireTree(this._state)


  },


  _addPost() {
    let newPost = {
      id: 5,
      name: 'Anton',
      lastname: 'Ml-bb',
      post: this._state.dataState.postText
    };

    this._state.dataState.postData.push(newPost);
    this._state.dataState.postText = ''
    this.rerenderEntireTree(this._state);
  },
  _addMessage(message) {
    let newMessage = {
      id: 4,
      message: message
    }
    this._state.message.userMessage.push(newMessage)
    this.rerenderEntireTree(this._state);
  },
  _updateNewPostText(newText) {
    this._state.dataState.postText = newText
    this.rerenderEntireTree(this._state);
  },

}


export default store;

