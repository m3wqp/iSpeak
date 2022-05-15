import React from "react";
import Spinner from "../../../../common/Spinner";
import userDefault from "../../../../assets/img/userDefault.png"
import ProfileStatusHooks from "./ProfileStatusHooks";
import style from '../Posts.Module.css'

const PostProfile = (props) => {


  if(!props.profile){
    return <Spinner/>
  }

  const mainPhotoSelected = (e) =>{
    if (e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  return(
    <div >
      <div  className={style.infoContainer}>
        <div>
          <img style={{height:"150px", borderRadius:"50%"}} src={props.profile.photos.small ? props.profile.photos.small : userDefault } alt="аватарка"/>
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoName}>{props.profile.fullName}</div>
          <div>Junior FrontEnd</div>
          <ProfileStatusHooks status={props.status} updateStatus={props.getUserStatus}/>
        </div>


        <div>



        </div>
      </div>




      <div>
        {props.isOwner && <input style={{margin:"1em"}} className='form-control form-control-sm' type="file" onChange={mainPhotoSelected}/>}
      </div>

    </div>
  )
}

export default PostProfile;