import React from "react";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator,setProfile} from "../../../state/reducers/postReducer";
import {connect} from "react-redux";
import axios from "axios";
import PostProfile from "./PostProfile";
import {withRouter} from "react-router-dom";



class PostComponent extends React.Component{


  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId){
      userId = 15;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
      .then(response => {
        this.props.setProfile(response.data)
        console.log(response.data)
      })
  }

  render(){
    console.log(this.props)
    return(
      <>
        <PostProfile profile={this.props.proFilePost}/>
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
    proFilePost: state.postCon.proFilePost
  }
}

let WithRouterPostComponent = withRouter(PostComponent)

const ViewPostsContainer = connect(mapStateToProps,{addPostActionCreator,onPostChangeActionCreator,setProfile})(WithRouterPostComponent);


export default ViewPostsContainer;