let initialState = {

  navLinkItems: [
    {id: 1, linkName: 'Новости', link: '/news'},
    {id: 2, linkName: 'Подарки', link: '/gift'},
    {id: 3, linkName: 'Видео', link: '/video'},
    {id: 4, linkName: 'Контакты', link: '/contacts'},
  ]
}
let headerReducer = (state = initialState, action) => {

  return state;
}


export default headerReducer;