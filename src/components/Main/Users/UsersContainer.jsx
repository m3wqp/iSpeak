import React from 'react';
import {connect} from "react-redux";
import {
  addUserAction,
  follow, followThunk, getUsers, isFetchingAC, isToggleFollowAC,
  setCurrentPage,
  setUser,
  unfollow, unFollowThunk
} from "../../../state/reducers/usersReducer";
import Users from "./Users";
import Feather from "../../../common/Spinner";
import {
  getCountUser,
  getCurrentPage, getFollowingInProgress,
  getIsFetching,
  getTotalCount,
  getUser
} from "../../../state/selectors/users-selectors";


class UserComponent extends React.Component {

  componentDidMount() {
    const {currentPage, countUser} = this.props
    this.props.getUsers(currentPage, countUser)
  }

  onChangeCurrentPage = (currentPage) => {
    const {countUser} = this.props
    this.props.getUsers(currentPage, countUser)
  }

  addUser = () => {
    this.props.addUserAction()
  }

  render() {


    return <>

      {this.props.isFetching ? <Feather/> : null}


      <Users
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
    user: getUser(state),
    countUser: getCountUser(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}


const UsersContainer = connect(mapStateToProps,
  {
    setUser,
    unfollow,
    addUserAction,
    follow,
    isFetchingAC,
    setCurrentPage,
    isToggleFollowAC,
    getUsers,
    followThunk,
    unFollowThunk
  })
(UserComponent)

export default UsersContainer;