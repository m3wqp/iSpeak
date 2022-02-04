import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../state/dialogReducer";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
  return{
    user: state.profileCon.userProfile,
    messages: state.dialogCon
  }
}

let mapDispatchToProps = (dispatch, state) =>{
  return{
    addMessage:() => {
      dispatch(addMessageActionCreator(state.dialogCon.newMessageText))
    },
    onMessageChange:(event) => {
      let newMessage = event.target.value
      dispatch(onMessageChangeActionCreator(newMessage))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;