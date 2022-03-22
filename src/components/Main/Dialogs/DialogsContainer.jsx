import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../../state/reducers/dialogReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";





let mapStateToProps = (state) => {
  return{
    user: state.profileCon.userProfile,
    messages: state.dialogCon,
    auth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    addMessage:(valueMessageElement) => {
      dispatch(addMessageActionCreator(valueMessageElement))
    },

  }
}

compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);