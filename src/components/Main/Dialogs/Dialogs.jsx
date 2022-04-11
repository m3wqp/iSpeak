import React from "react";
import Message from "./Message/Message";
import MessageProfile from "./MessageProfile/MessageProfile";
import style from "./Dialogs.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utility/validate";
import {TextareaControl} from "../../../formControl/FormControl";

const maxLength1000 = maxLengthCreator(1000)


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      <Field
        placeholder="Введите текст..."
        component={TextareaControl}
        name='messageInput'
        validate={[required, maxLength1000]}
      />

      <div className={style.buttonContainer}>
        <button
          className={style.button}
        >
          Add Message
        </button>
      </div>


    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: "addMessageForm"
})
(AddMessageForm)


const Dialogs = (props) => {

  const addNewMessage = (value) => {
    props.addMessage(value.messageInput)
  }


  let giveProfile = props.user.map(profile => <MessageProfile online={profile.online} photo={profile.photo}
                                                              id={profile.id} name={profile.user}/>);
/*  let ViewMessage = props.messages.userMessage.map(messages => <Message message={messages.message}/>);*/


  return (
    <>
      <div className={style.dialogsContainer}>
        <div className={style.profileMessageContainer}>
          {giveProfile}
        </div>

        <div className={style.dialogs}>
          <div>


            <div className={style.chatHeader}>

              <div className={style.ChatContactName}>
                <img className={style.chatHeaderImg} src={props.user[1].photo} alt=""/>
                <div className={style.chatInfo}>
                  <b>{props.user[1].user}</b>
                  <span>Выбирает Стикер ....</span>
                </div>
              </div>
              <img className={style.chatIconPatrik}
                   src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453900Fav256x25632.png" alt=""/>

            </div>


            <Message userMessage={props.messages.userMessage}/>

          </div>


          <div className={style.fromChat}>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>

        </div>
      </div>
    </>
  );
}


export default Dialogs;