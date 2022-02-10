import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {addUserActionCreator, followAC, unfollowAC} from "../../../state/reducers/usersReducer";


let mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    addUser: () => {
      dispatch(addUserActionCreator())
    },
    followAC: (userId) =>{
      dispatch(followAC(userId))
    },
    onFollow:(userId) => {
      dispatch(unfollowAC(userId))
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;