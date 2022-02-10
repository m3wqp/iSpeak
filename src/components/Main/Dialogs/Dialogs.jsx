import React from "react";
import Message from "./Message/Message";
import Profile from "./Profile/Profile";
import style from "./Dialogs.module.css"


const Dialogs = (props) => {



  let addMessage = () => {
   props.addMessage()
  }

 let onMessageChange = (event) =>{
    props.onMessageChange(event)
 }

  let giveProfile = props.user.map(profile => <Profile id={profile.id} name={profile.user}/>);
  let ViewMessage = props.messages.userMessage.map(messages => <Message message={messages.message}/>);


  return (
    <>
      <div className={style.dialogsContainer}>
        <div>
          {giveProfile}
        </div>
        <div>
          {ViewMessage}
          <div className="input-group mb-3 mt-5">

            <input type="text"
                   className="form-control"
                   placeholder="Введите текст..."
                   aria-label="Введите текст..."
                   aria-describedby="button-addon2"
                   onChange={onMessageChange}
                   value={props.messages.newMessageText}
            />

            <button
              className="btn btn-outline-primary p"
              type="button"
              id="button-addon2"
              onClick={ addMessage }>

              Add Message

            </button>
          </div>
        </div>

      </div>

    </>
  );
}

export default Dialogs;