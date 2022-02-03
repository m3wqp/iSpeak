import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../state/dialogReducer";


const DialogsContainer = (props) => {

  let state = props.store.getState()

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator(state.dialogCon.newMessageText))
  }

  let onMessageChange = (event) => {
    let newMessage = event.target.value
    props.store.dispatch(onMessageChangeActionCreator(newMessage))
  }


  return <Dialogs addMessage={addMessage} onMessageCahge={onMessageChange} user={state.profileCon.userProfile} messages={state.dialogCon}/>


}

export default DialogsContainer;