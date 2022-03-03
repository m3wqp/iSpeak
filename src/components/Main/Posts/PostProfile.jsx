import React from "react";
import Spinner from "../../../common/Spinner";
import userDefault from "../../../assets/img/userDefault.png"


const PostProfile = (props) => {
  debugger
  if(!props.profile){
    return <Spinner/>
  }

  return(
    <div style={{display:'flex'}}>
      <div>
        <img style={{height:"70px"}} src={props.profile.photos.small ? props.profile.photos.small : userDefault } alt="аватарка"/>
      </div>
      <div>
        <span>{props.profile.aboutMe}</span>
        <span>{props.profile.fullName}</span>

      </div>
    </div>
  )
}

export default PostProfile;