import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NavBar.module.css"


const NavBar = (props) => {

  return (
    <div className={style.nav_Container}>
      <ul className={style.nav_Items}>
        {props.navBar.map(item => {
          return <li className={style.nav_Item}>
            <NavLink to={item.link} className={style.nav_Link}>{item.name}</NavLink>
          </li>
        })}

      </ul>
      <div className={style.nav_footer}>footer</div>
    </div>

  )
}

export default NavBar;