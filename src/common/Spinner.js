import React from "react";
import FeatherIcon from '../assets/img/Feather.svg.png'
import style from './Spinner.module.css'

let Feather = () => {

  return (
    <div className={style.moduleSpinner}>
      <img style={{height: '50px'}} src={FeatherIcon} alt="Spinner"/>
    </div>
  )
}

export default Feather;