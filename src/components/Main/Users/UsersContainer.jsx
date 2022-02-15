import React from 'react';
import {connect} from "react-redux";
import {
  addUserActionCreator,
  followAC,
  setCurrentPageAC,
  setUserAC,
  unfollowAC
} from "../../../state/reducers/usersReducer";
import axios from "axios";
import User from "./User";


class UserComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUser}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countUser}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  addUser = () => {
    this.props.addUser()
  }

  render() {


    return <User
      addUser={this.addUser}
      totalCount={this.props.totalCount}
      countUser={this.props.countUser}
      currentPage={this.props.currentPage}
      user={this.props.user}
      onChangeCurrentPage={this.onChangeCurrentPage}
      onFollow={this.props.onFollow}
      followAC={this.props.followAC}


    />

  }
}

let mapStateToProps = (state) => {
  return {
    user: state.users,
    countUser: state.users.countUser,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => {
      dispatch(addUserActionCreator())
    },
    followAC: (userId) => {
      dispatch(followAC(userId))
    },
    onFollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUserAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },

  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserComponent)

export default UsersContainer;