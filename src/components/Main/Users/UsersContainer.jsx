import React from 'react';
import {connect} from "react-redux";
import {
  addUserAction,
  follow, isFetchingAC,
  setCurrentPage,
  setUser,
  unfollow
} from "../../../state/reducers/usersReducer";
import axios from "axios";
import User from "./User";
import Feather from "../../../common/Spinner";



class UserComponent extends React.Component {

  componentDidMount() {
    this.props.isFetchingAC(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUser}`)
      .then(response => {
        this.props.isFetchingAC(false)
        this.props.setUser(response.data.items)
      })
  }

  onChangeCurrentPage = (currentPage) => {
    this.props.isFetchingAC(true)
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countUser}`)
      .then(response => {
        this.props.isFetchingAC(false)
        this.props.setUser(response.data.items)
      })
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
  }
}




const UsersContainer = connect(mapStateToProps,
  {setUser, unfollow, addUserAction, follow, isFetchingAC, setCurrentPage})
(UserComponent)

export default UsersContainer;