import React from "react";
import Posts from "./Posts";
import ViewPosts from "./ViewPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state/postReducer";


const ViewPostsContainer = (props) => {




  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (event) => {
    let inputValue = event.target.value
    props.dispatch(onPostChangeActionCreator(inputValue))
  }


  return (

    <ViewPosts onPostChange={onPostChange} addPost={addPost} userPost={props.userPost}/>

  )
}

export default ViewPostsContainer;