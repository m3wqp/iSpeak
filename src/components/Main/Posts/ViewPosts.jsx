import React from "react";
import Posts from "./Posts";
import {Field, reduxForm} from "redux-form";
import {TextareaControl} from "../../../formControl/FormControl";
import {maxLengthCreator, required} from "../../../utility/validate";


const ViewPosts = (props) => {


  let propPostData = props.userPost.postData.map(post => <Posts name={post.name}
                                                                lastname={post.lastname}
                                                                post={post.post}/>)



  const maxLength20 = maxLengthCreator(10)

  const FormPost = (props) =>{
    return(
      <form onSubmit={props.handleSubmit} >

        <Field type="text"
               className="form-control"
               placeholder="Введите текст..."
               aria-label="Введите текст..."
               aria-describedby="button-addon2"
               component={TextareaControl}
               name={'postValue'}
               validate={[required, maxLength20]}

        />
<div>
  <button
    className="btn btn-outline-primary"
    id="button-addon2"
  >

    Add Post

  </button>

</div>

      </form>
    )
  }

  const FormReduxPost = reduxForm({
    form:"postForm"
  })(FormPost)

  const addPost = (value) =>{
    props.addPostActionCreator(value.postValue)
  }

  return (
    <div>

      <FormReduxPost onSubmit={addPost}/>
      {propPostData}

    </div>
  )
}

export default ViewPosts