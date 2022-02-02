import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = (props) => {

  return (
    <ul className='nav flex-column'>
      <li className='nav-item'>
        <NavLink to={props.link} className='nav-link'>{props.name}</NavLink>
      </li>
    </ul>
  )
}

export default NavBar;