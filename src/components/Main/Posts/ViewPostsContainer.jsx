import React from "react";
import ViewPosts from "./ViewPosts";
import {
  addPostActionCreator, getStatus,
  onPostChangeActionCreator,
  setProfile,
  setProfilePost, updateStatus
} from "../../../state/reducers/postReducer";
import {connect} from "react-redux";
import PostProfile from "./PostProfile";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class PostComponent extends React.Component {


  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId;
        if(!userId){
          this.props.history.push("/login")
        }
    }
    this.props.setProfilePost(userId)
    this.props.getStatus(userId)
  }

  render() {

    return (
      <>
        <PostProfile getUserStatus={this.props.updateStatus} status={this.props.status} profile={this.props.proFilePost}/>
        <ViewPosts
          {...this.props}
        />
      </>
    )
  }

}


let mapStateToProps = (state) => {
  return {
    userPost: state.postCon,
    proFilePost: state.postCon.proFilePost,
    status: state.postCon.status,
    authorizedUserId: state.auth.id,
    auth: state.auth.isAuth
  }
}


export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {addPostActionCreator, onPostChangeActionCreator, setProfile, setProfilePost, getStatus , updateStatus})
)(PostComponent)