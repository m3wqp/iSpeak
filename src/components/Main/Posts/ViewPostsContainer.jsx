import React from "react";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/postReducer";

const ViewPostsContainer = (props) => {

let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {
    let inputValue = event.target.value
    props.store.dispatch(onPostChangeActionCreator(inputValue))
  }


  return <ViewPosts onPostChange={onPostChange} addPost={addPost} userPost={state.postCon}/>


}

export default ViewPostsContainer;