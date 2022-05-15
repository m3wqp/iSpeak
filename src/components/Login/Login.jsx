import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, InputControl} from "../../formControl/FormControl";
import {maxLengthCreator, required} from "../../utility/validate";
import {connect} from "react-redux";
import {login, logout} from "../../state/reducers/auth-Reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"
import headerImg from '../../assets/img/headerForm.jpg'

const maxLength10 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      {/*
      {createField("Логин", "email", InputControl, [required, maxLength10], {}, '', 'm3wqp')}
      {createField("Пароль", "password", InputControl, [required, maxLength10], {
        type: "password",
        value: '123qwe'
      })}
 {createField(null, "rememberMe", InputControl, null, {type: "checkbox"}, "Запомнить меня")}
      */}

      <div className={style.formLoginContent}>


        <img src={headerImg} alt=""/>

        <div className={style.inputContainer}>
          <div className={style.inputBlockContainer}>
            <div>Логин</div>
            <Field className={style.input} name={'email'} value={'m3wqp'} component={'input'}/>
          </div>

          <div className={style.inputBlockContainer}>
            <div>Пароль</div>
            <Field className={style.input} name={'password'} value={'m3wqp'} component={'input'} type={'password'}/>
          </div>

          <div className={style.checkbox}>
            <label className={style.customCheckbox}>
              <input type="checkbox" name="rememberMe"/>
              <span>Запомнить меня</span>
            </label>
            <span style={{color: '#787878'}}>Забыли Пароль?</span>

          </div>

          <button className={style.btn}>Войти</button>
          <div className={style.block}>
            <b>Логин</b>: m3wqp@mail.ru
            <b> Пароль</b>: 123qwe
          </div>
        </div>

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField("symbols from image", "captcha", InputControl, [required, maxLength10],)}


        {error && <div className={style.formError}>
          <span>{error}</span>
        </div>}


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

    <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>

  )
}


const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login, logout})(Login);