import React from "react";
import Posts from "./Posts";


const ViewPosts = (props) => {
debugger

  let propPostData = props.userPost.postData.map(post => <Posts name={post.name}
                                                                lastname={post.lastname}
                                                                post={post.post}/>)

  let onAddPostChange = () => {
    props.addPostActionCreator()
  }

  let onTextPostChange = (event) => {
    let textValue = event.target.value
    props.onPostChangeActionCreator(textValue)
  }

  return (
    <div>
      <div className="input-group mb-3 mt-5">

        <input type="text"
               className="form-control"
               placeholder="Введите текст..."
               aria-label="Введите текст..."
               aria-describedby="button-addon2"
               onChange={onTextPostChange}
               value={props.userPost.postText}

        />

        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={onAddPostChange}>

          Add Post

        </button>
      </div>
      {propPostData}
    </div>
  )
}

export default ViewPosts