import React from 'react';
import {connect} from "react-redux";
import {
  addUserAction,
  follow, followThunk, getUsers, isFetchingAC, isToggleFollowAC,
  setCurrentPage,
  setUser,
  unfollow, unFollowThunk
} from "../../../state/reducers/usersReducer";
import User from "./User";
import Feather from "../../../common/Spinner";


class UserComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.countUser)
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.countUser)
  }

  addUser = () => {
    this.props.addUserAction()
  }

  render() {


    return <>

      {this.props.isFetching ? <Feather/> : null}


      <User
        addUser={this.addUser}
        totalCount={this.props.totalCount}
        countUser={this.props.countUser}
        currentPage={this.props.currentPage}
        user={this.props.user}
        onChangeCurrentPage={this.onChangeCurrentPage}
        onFollow={this.props.unfollow}
        followAC={this.props.follow}
        toggleFollow={this.props.isToggleFollowAC}
        followingInProgress={this.props.followingInProgress}
        followThunk={this.props.followThunk}
        unFollowThunk={this.props.unFollowThunk}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.users,
    countUser: state.users.countUser,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  }
}


const UsersContainer = connect(mapStateToProps,
  {setUser, unfollow, addUserAction, follow, isFetchingAC, setCurrentPage, isToggleFollowAC, getUsers , followThunk,unFollowThunk})
(UserComponent)

export default UsersContainer;