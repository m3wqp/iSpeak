import React from "react";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/reducers/postReducer";
import {connect} from "react-redux";


class PostComponent extends React.Component{

  render(){
    return(
      <ViewPosts
        {...this.props}
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