import React, {useState} from "react";
import Spinner from "../../../../common/Spinner";
import ProfileDataReduxForm from "./ProfileDataForm";
import style from '../Posts.Module.css'

const PostProfileInfo = ({profile, isOwner, saveFormProfile, ...props}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Spinner/>
  }

  const closeForm = () => {
    setEditMode(false)
  }

  const onSubmit = (formData) => {
    saveFormProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }


  return (
    <div>

      {editMode
        ?
        <ProfileDataReduxForm initialValues={profile} closeForm={closeForm} profile={profile} setEditMode={setEditMode}
                              onSubmit={onSubmit}/>
        : <ProfileInfo isOwner={isOwner} setEditMode={() => setEditMode(true)} profile={profile}/>}
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>
    <b style={{paddingLeft: "10px"}}>{contactTitle}</b> : {contactValue}
  </div>
}
const ProfileInfo = ({profile, setEditMode, isOwner}) => {
  return (
    <div style={{display: 'flex'}}>
      <div className={style.infoContactContainer}>


        <div>
          <b>Полное Имя</b> :{profile.fullName}
        </div>
        <div>
          <b>Ищу работу</b> : {profile.lookingForAJob ? "Да" : "Нет"}
        </div>
        {profile.lookingForAJob &&
        <div>
          <b>Мои Навыки</b> : {profile.lookingForAJobDescription}
        </div>
        }
        <div>
          <b>Обо мне</b> : {profile.aboutMe}
        </div>
        <div>

          <b>Контакты</b> : {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
      </div>
      <div>
        {isOwner && <button className={style.button} onClick={setEditMode}>Изменить Профиль</button>}
      </div>
    </div>
  )
}


export default PostProfileInfo;
