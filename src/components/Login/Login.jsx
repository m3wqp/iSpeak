import React from 'react'
import {Field, reduxForm} from "redux-form";
import {InputControl} from "../../formControl/FormControl";
import {maxLengthCreator, required} from "../../utility/validate";
import {connect} from "react-redux";
import authReducer, {login, logout} from "../../state/reducers/auth-Reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"


const  maxLength10 = maxLengthCreator(30)

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} action="">
      <div>
        <Field placeholder={"Логин"} name={"email"} component={InputControl} validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field placeholder={"Пароль"} type={'password'} name={"password"} component={InputControl} validate={[required, maxLength10]}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Запомнить меня
      </div>
      {props.error && <div className={style.formError}>
        <span>{props.error}</span>
      </div>}
      <div>
        <button>
          Отправить
        </button>
      </div>
    </form>
  )
}



const LoginReduxForm  = reduxForm({
  form:'loginForm'
})(LoginForm)



const Login = (props) => {
  debugger
  const onSubmit = (formData) => {
    props.login(formData.email , formData.password , formData.rememberMe)
  }

  if (props.isAuth){
    return <Redirect to={'/posts'}/>
  }


  return (
    <div>
      <h1>
        Логин
      </h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth
})



export default connect (mapStateToProps, {login,logout }) (Login);