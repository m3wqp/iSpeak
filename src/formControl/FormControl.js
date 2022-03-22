import React from "react";
import s from "./Form.module.css";



const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error;

  return(
    <div  className={s.formControl + ' ' + (hasError ?s.formControlError : s.formControlFocus)}>
      {hasError && <span className={s.spanError}>{meta.error}</span>}
      {props.children}
    </div>

  )


}


 export const TextareaControl = (props) =>{
    const {input, meta , child, ...restProps} = props;

   return <FormControl {...props}><textarea  {...input} {...restProps}/></FormControl>

 };

 export const InputControl = (props) =>{
    const {input, meta , child, ...restProps} = props;

   return <FormControl {...props}><input  {...input} {...restProps}/></FormControl>

 }