import React from "react";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/reducers/postReducer";
import {connect} from "react-redux";


class PostComponent extends React.Component{

  render(){
    return(
      <ViewPosts
        userPost={this.props.userPost}
        addPost={this.props.addPostActionCreator}
        onPostChange={this.props.onPostChangeActionCreator}
      />
    )
  }

}

let mapStateToProps = (state) => {
  return {
    userPost: state.postCon
  }
}


const ViewPostsContainer = connect(mapStateToProps,{addPostActionCreator,onPostChangeActionCreator})(PostComponent);


export default ViewPostsContainer;