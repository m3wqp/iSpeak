import React from "react";

const Header = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link'>Друзья</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link'>Новости</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link'>Поиск</a>
      </li>
    </ul>
  );
}

export default Header;