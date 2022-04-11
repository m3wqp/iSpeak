import React from "react";
import {createField, InputControl, TextareaControl} from "../../../../formControl/FormControl";
import {reduxForm} from "redux-form";
import s from "../../../Login/Login.module.css";
import close from "../../../../assets/img/close.svg"


const ProfileDataForm = ({profile, handleSubmit, error, closeForm}) => {
  return (
    <form className={s.formModule} onSubmit={handleSubmit}>
      <div className={s.contentModuleForm}>
        <div className={s.headerForm}>
          <h2>Личные Данные</h2>
          <div className={s.closeIcon} onClick={closeForm}><img src={close}/></div>
        </div>

        {error && <div className={s.formError}>
          <span>{error}</span>
        </div>}
        <div>


          <div className={s.jobControl}>
            <div className={s.inputBlock}>
              <b>Полное Имя</b> : {createField("Full Name", "fullName", InputControl, [])}
            </div>
            <div className={s.workSearches}>
              <b>Ищу работу</b> : {createField('', "lookingForAJob", InputControl, [], {type: "checkbox"})}
            </div>
          </div>


          <div className={s.inputBlock}>
            <b>Мои Навыки</b> : {createField("My Skills", "lookingForAJobDescription", TextareaControl, [])}
          </div>
          <div className={s.inputBlock}>
            <b>Обо мне</b> : {createField("About Me", "aboutMe", TextareaControl, [])}
          </div>


        </div>
        <b>Контакты :</b>
        <div className={s.contactBlock}>
          {Object.keys(profile.contacts).map(key => {
            return <div>
              <b>{key} : {createField(key, "contacts." + key, InputControl, [])}</b>
            </div>
          })}
        </div>
        <div className={s.btnBlock}>
          <button className={s.btn}>сохранить</button>
        </div>
      </div>
    </form>
  )
}


const ProfileDataReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataReduxForm;