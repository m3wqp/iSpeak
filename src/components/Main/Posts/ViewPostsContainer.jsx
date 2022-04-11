import React from "react";
import ViewPosts from "./ViewPosts";
import {
  addPostActionCreator, getStatus,
  onPostChangeActionCreator, saveFormProfile, savePhoto,
  setProfile,
  setProfilePost, updateStatus
} from "../../../state/reducers/postReducer";
import {connect} from "react-redux";
import PostProfile from "./Profile/PostProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import PostProfileInfo from "./Profile/PostProfileInfo";


class PostComponent extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.setProfilePost(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }

  }

  render() {

    return (
      <>
        <div style={{display:'flex' , backgroundColor:'#ebedf4'}}>


        <PostProfile isOwner={!this.props.match.params.userId}
                     getUserStatus={this.props.updateStatus}
                     status={this.props.status}
                     profile={this.props.proFilePost}
                     savePhoto={this.props.savePhoto}/>
        <PostProfileInfo  saveFormProfile={this.props.saveFormProfile} isOwner={!this.props.match.params.userId} profile={this.props.proFilePost}/>
        </div>
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
  connect(mapStateToProps, {
    addPostActionCreator,
    onPostChangeActionCreator,
    setProfile,
    setProfilePost,
    getStatus,
    updateStatus,
    savePhoto,
    saveFormProfile,

  })
)(PostComponent)