import React from 'react'
import {reduxForm} from "redux-form";
import {createField, InputControl} from "../../formControl/FormControl";
import {maxLengthCreator, required} from "../../utility/validate";
import {connect} from "react-redux";
import {login, logout} from "../../state/reducers/auth-Reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"

/*<div>
<div>Логин: m3wqp@mail.ru</div>
<div>Пароль: 123qwe</div>
</div>*/

const maxLength10 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>

      <div className={style.formLoginContent}>
        <h2 style={{marginTop: "1em",marginLeft:'3em'}}>Логин</h2>
        <div className={style.fieldContent}>
          <div>
            <div style={{marginTop: "1em",marginLeft:'2em'}}>Логин</div>
            {createField("Логин", "email", InputControl, [required, maxLength10], {}, '', 'm3wqp')}
          </div>
          <div>
            <div style={{marginTop: "1em",marginLeft:'2em'}}>Пароль</div>
            {createField("Пароль", "password", InputControl, [required, maxLength10], {
              type: "password",
              value: '123qwe'
            })}
          </div>
        </div>

        <div style={{marginTop: "1em",marginLeft:'2em'}} className={style.checkbox}>
          {createField(null, "rememberMe", InputControl, null, {type: "checkbox"}, "Запомнить меня")}
        </div>


          {captchaUrl && <img src={captchaUrl}/>}
          {captchaUrl && createField("symbols from image", "captcha", InputControl, [required, maxLength10],)}



        {error && <div className={style.formError}>
          <span>{error}</span>
        </div>}
        <div>
          <button  style={{marginTop: "1em",marginLeft:'3em'}} className={style.btn}>
            Отправить
          </button>
        </div>
      </div>

    </form>
  )
}


const LoginReduxForm = reduxForm({
  form: 'loginForm'
})(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/posts'}/>
  }


  return (
    <div>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
  )
}


const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login, logout})(Login);