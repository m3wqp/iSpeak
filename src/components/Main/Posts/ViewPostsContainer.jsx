import React from "react";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/postReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    userPost: state.postCon
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onPostChange: (event) => {
      let inputValue = event.target.value
      dispatch(onPostChangeActionCreator(inputValue))
    }
  }
}


const ViewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(ViewPosts);


export default ViewPostsContainer;