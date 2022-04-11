import React from "react";
import style from "./User.Module.css";
import userIcon from "../../../assets/img/userDefault.png";
import {NavLink} from "react-router-dom";


const User = ({user, followThunk, followingInProgress, unFollowThunk, ...props}) => {

debugger
  return (

    <div className={style.userContainer}>
      <NavLink to={'posts/' + user.id}>
        <div>
          <img src={user.photos.small != null ? user.photos.small : userIcon}
               alt="Аватар"
               className={style.img}
          />
        </div>
      </NavLink>

      <div>
        <div className={style.infoContainer}>
          <span>{user.name}</span>

          {user.followed

            ?

            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

              followThunk(user.id)

            }} className={style.btn}>Подписаться</button>

            :

            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

              unFollowThunk(user.id)

            }} className={style.btn_unFollow}>Отписаться</button>}

        </div>
      </div>


    </div>

  )
}


export default User;