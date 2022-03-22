import React from "react";
import Message from "./Message/Message";
import MessageProfile from "./MessageProfile/MessageProfile";
import style from "./Dialogs.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utility/validate";
import {TextareaControl} from "../../../formControl/FormControl";

const maxLength20 = maxLengthCreator(10)


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.form} >
      <Field
        placeholder="Введите текст..."
        component={TextareaControl}
        name='messageInput'
        validate={[required, maxLength20]}
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


  let giveProfile = props.user.map(profile => <MessageProfile id={profile.id} name={profile.user}/>);
  let ViewMessage = props.messages.userMessage.map(messages => <Message message={messages.message}/>);


  return (
    <>
      <div className={style.dialogsContainer}>
        <div>
          {giveProfile}
        </div>
        <div className={style.dialogs}>
          <div>
            {ViewMessage}
          </div>
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
          </div>

        </div>
      </div>
    </>
  );
}


export default Dialogs;