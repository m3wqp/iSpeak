import React from "react";
import style from "./User.Module.css";
import userIcon from "../../../assets/img/userDefault.png";


const User = (props) => {

  debugger

  const addUser = () => {
    props.addUser()
  }


  let countUserPage = Math.ceil(props.totalCount / props.countUser)

  let pageUsers = [];
  for (let i = 1; i <= countUserPage; i++) {

    pageUsers.push(i)

  }

  return <div>

    <div>


      {pageUsers.map(count => {
        return <button
          onClick={() => {
            props.onChangeCurrentPage(count)
          }}
          className={props.currentPage === count && style.btn_active}>{count}</button>
      })}

    </div>

    <div onClick={addUser} className='btn m-3 btn-danger'>Добавить нового пользователя</div>


    {
      props.user.users.map(user => <div key={user.id} className={style.userContainer}>

        <div>
          <img src={user.photos.small != null ? user.photos.small : userIcon}
               alt="Аватар"
               className={style.img}
          />
        </div>
        <div>
          <div className={style.infoContainer}>
            <span>{user.name}</span>
            {user.followed
              ? <button onClick={() => {
                props.onFollow(user.id)
              }} className={style.btn}>Подписаться</button>
              : <button onClick={() => {
                props.followAC(user.id)
              }} className={style.btn_unFollow}>Отписаться</button>}

          </div>
        </div>


      </div>)}
    {/* <div onClick={this.getNewUser} className='btn m-3 btn-danger'>Показать новых пользователей</div>*/}
  </div>

}


export default User;