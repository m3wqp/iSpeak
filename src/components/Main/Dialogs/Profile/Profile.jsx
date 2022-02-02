import React from "react";
import style from "./Profile.module.css"
import {NavLink} from "react-router-dom";



const Profile = (p) => {
  return (
    <div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item link">
          <NavLink className='nav-link' to={"dialogs/" + p.id}>{p.name}</NavLink>
        </li>
      </ul>
    </div>

  );
}

export default Profile;