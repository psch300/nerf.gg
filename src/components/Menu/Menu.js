import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="nerfgg-menu">
        <li className="nerfgg-menu-item"><NavLink exact to="/" activeClassName="active">전적 검색</NavLink></li>
        <li className="nerfgg-menu-item"><NavLink exact to="/analysis" activeClassName="active">챔피언 분석</NavLink></li>
        <li className="nerfgg-menu-item"><NavLink exact to="/statistics" activeClassName="active">통계</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;