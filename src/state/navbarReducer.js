
let initialState = {
  navBar: [
    {link: '/', name: 'Сообщество'},
    {link: '/dialogs', name: 'Диалоги'},
    {link: '/posts', name: 'Записи'},
  ]
}

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;