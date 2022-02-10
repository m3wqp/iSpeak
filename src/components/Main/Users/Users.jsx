import React from 'react';
import style from "./User.Module.css";

const Users = (props) => {

  let addUser = () => {
    props.addUser()
  }


  return (
    <div>

      <div onClick={addUser} className='btn btn-danger'>Добавить нового пользователя</div>

      {
        props.user.users.map(user => <div key={user.id} className={style.userContainer}>

        <div>
          <img src="https://www.meme-arsenal.com/memes/862d2a9a2265a4524f51655a5f5dacb5.jpg"
               alt="Аватар"
               className={style.img}
          />
        </div>
        <div>
          <div className={style.infoContainer}>
            <span>{user.name + ' ' + user.lastname}</span>
            {user.followed
                ? <button onClick={ () => { props.onFollow(user.id)} } className={style.btn}>Подписаться</button>
                : <button onClick={ () => { props.followAC(user.id)}} className={style.btn_unFollow}>Отписаться</button> }

          </div>
        </div>
      </div>)}

    </div>


  )
}

export default Users;