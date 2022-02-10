
let initialState = {
  navBar: [
    {link: '/users', name: 'Пользователи'},
    {link: '/dialogs', name: 'Диалоги'},
    {link: '/posts', name: 'Записи'},
  ]
}

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;