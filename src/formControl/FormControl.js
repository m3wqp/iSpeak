import React from "react";
import s from "./Form.module.css";
import {Field} from "redux-form";


const FormControl = ({ meta: {touched,error},  children}) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + ' ' + (hasError ? s.formControlError : s.formControlFocus)}>
      {hasError && <span className={s.spanError}>{error}</span>}
      {children}
    </div>

  )


}


export const TextareaControl = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControl {...props}><textarea  {...input} {...restProps}/></FormControl>
};

export const InputControl = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControl {...props}><input  {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, component, validate, props = {}, text = '',value) => {

  return (
    <div style={{display: 'flex', alignItems: "center"}}>
      <Field placeholder={placeholder}
             name={name}
             component={component}
             validate={validate}
             {...props}
             value={value}

      /><span style={{marginLeft: "10px"}}> {text}</span>
    </div>
  )
}