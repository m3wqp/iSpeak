import React, {useState} from "react";
import style from './Message.module.css'

const Message = (p) => {


  return (
    <div className={style.message__container}>
      <div className={style.otherContainer}>
        <div className={style.messageStatusContainer}><span className={style.messageName}>GR-менеджер</span><span className={style.messageTime} >20:50 Вчера</span></div>
        <div className={style.otherMessage}>
          Пора бы замарочиться о UI мой друг
        </div>
      </div>
      <div className={style.message__outer}>
        <div className={style.message__inner}>
          <div className={style.meMessage}>
            {p.userMessage.map(message => {
              return(
                <div>
                  <div className={style.messageStatusContainer}><span className={style.messageName}>{message.name}</span><span className={style.messageTime} >10:30 Сегодня</span></div>
                  <div className={style.message}>{message.message}</div>

                </div>
              )
            })}
          </div>
        </div>

      </div>

    </div>


  );
}



export default Message;


