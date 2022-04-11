import React from "react";
import {NavLink} from "react-router-dom";
import style from './Profile.module.css'


const MessageProfile = (p) => {
  return (
    <div className={style.messageProfileBlock}>
      <NavLink exact to={"dialogs/" + p.id}>
        <div className={style.linkContent}>
          <img src={p.photo} alt=""/>
          <div className={style.status}>
            <b>{p.name}</b>
            {p.online
              ? <div className={style.statusVisit}><div className={style.circleOnline}></div><span>Online</span></div>
              : <div className={style.statusVisit}><div className={style.circleOffline}></div><span>Offline</span></div>
            }
          </div>

        </div>
      </NavLink>
    </div>


  );
}

export default MessageProfile;