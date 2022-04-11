import React from 'react'
import { reduxForm} from "redux-form";
import {createField, InputControl} from "../../formControl/FormControl";
import {maxLengthCreator, required} from "../../utility/validate";
import {connect} from "react-redux";
import  {login, logout} from "../../state/reducers/auth-Reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"


const  maxLength10 = maxLengthCreator(30)

const LoginForm = ({handleSubmit,error,captchaUrl}) => {

  return (
    <form onSubmit={handleSubmit} action="">
      {createField("Логин", "email", InputControl , [required, maxLength10],{},'','m3wqp')}
      {createField("Пароль", "password", InputControl , [required, maxLength10],{type:"password",value:'123qwe'} )}
<div className={style.checkbox}>
  {createField(null, "rememberMe", InputControl , null, {type:"checkbox"}, "Запомнить меня")}
</div>


      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField("symbols from image", "captcha", InputControl ,[required, maxLength10], )}

      {error && <div className={style.formError}>
        <span>{error}</span>
      </div>}
      <div>
        <button>
          Отправить
        </button>
      </div>

      <div>
        <div>Логин: m3wqp@mail.ru</div>
        <div>Пароль: 123qwe</div>
      </div>
    </form>
  )
}



const LoginReduxForm  = reduxForm({
  form:'loginForm'
})(LoginForm)



const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email , formData.password , formData.rememberMe,formData.captcha)
  }

  if (props.isAuth){
    return <Redirect to={'/posts'}/>
  }


  return (
    <div>
      <h1>
        Логин
      </h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
  )
}


const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth:state.auth.isAuth
})



export default connect (mapStateToProps, {login,logout }) (Login);