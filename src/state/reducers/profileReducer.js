let initialProfile = {
  userProfile: [
    {
      id: 1,
      user: 'Sam',
      online: false,
      photo: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
    },
    {
      id: 2,
      user: 'Рыжик',
      online: true,
      photo: 'https://cotiki.ucoz.ru/_ph/4/2/803665579.jpg?1644051638'
    },
    {
      id: 3,
      user: 'Варя',
      online: true,
      photo: 'https://avatarko.ru/img/kartinka/33/kot_cvety_zhivotnye_34736.jpg'
    },
    {
      id: 4,
      user: 'Барсик',
      online: false,
      photo: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/02/C52CDA58-23EF-4AE6-8A45-D83A22B3C01E.jpeg'
    },
    {
      id: 5,
      user: 'Борис',
      online: false,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIaSsTVfJDlRVFDlVoYRSEk6tg4KnNbkpDg&usqp=CAU'
    },
    {
      id: 6,
      user: 'Барсик',
      online: true,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlcZUu0QzkPcf7KeOoJ_YlBN8DycBR0r15w&usqp=CAU'
    },
    {
      id: 7,
      user: 'Пушистик',
      online: false,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaq0t_OHlg_jv8jk1OCAy_xa9C9P51ZcsZ3g&usqp=CAU'
    },
  ],
}

const profileReducer = (state = initialProfile, action) => {

  return state;
}


export default profileReducer;