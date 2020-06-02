import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="nerfgg-menu">
        <li className="nerfgg-menu-item"><NavLink exact to="/" activeClassName="active">전적 검색</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;