import React from "react";
import style from "./Posts.Module.css"



const Post = (props) => {

  return(
    <div className={style.postContainer}>
      <img className={style.postAvatar}
           src="https://www.meme-arsenal.com/memes/862d2a9a2265a4524f51655a5f5dacb5.jpg"
           alt="АВАТАР"
      />
      <div className={style.postContent}>
      <span className={style.postSpan}>{props.name + ' ' + props.lastname}</span>
      <div className={style.postText}>{props.post}</div>
      </div>
    </div>
  )
};


export default Post;