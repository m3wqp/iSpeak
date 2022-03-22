import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"
import logoutSvg from '../../assets/img/logout.svg'


const Header = (props) => {

const logout = () =>{
    props.logout();
  }

  return (


    <div className={style.containerHeader}>
      <div className={style.header_container__icon}>
        <img className={style.header_logo}
             src="https://media-exp1.licdn.com/dms/image/C4E0BAQF5h1ZxU3WGJA/company-logo_200_200/0/1551913928818?e=2159024400&v=beta&t=A1OE6fTZJ72Sk63QeJt7jJvLwqbK16d0lt8oDv_YC5Y"
             alt="лого"/>
      </div>

      <div className={style.nav_items}>

        {props.navLink.map(item => {
          return <div key={item.id} className={style.nav_item}>
            <NavLink activeClassName={style.active} style={{color: "#808080"}} to={item.link}
                     className={item.id === item.id && style.navLink}>{item.linkName}</NavLink>
          </div>
        })}
      </div>


      <div className={style.header_btn}>
        {
          props.auth.isAuth
            ? <div className={style.header_block__navLink}><NavLink activeClassName={style.active_login__link} className={style.header_btn__link}
                            to={'/login'}>Профиль</NavLink>
            <div onClick={logout}><img src={logoutSvg}/></div>

          </div>
            : <NavLink activeClassName={style.active_login__link} className={style.header_btn__link}
                       to={'/login'}>Login</NavLink>
        }

      </div>


    </div>

  );
}

export default Header;