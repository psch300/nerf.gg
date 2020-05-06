import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="nerfgg-menu">
        <li className="nerfgg-menu-item-active"><a href="/">전적 검색</a></li>
        <li className="nerfgg-menu-item"><a href="/analysis">챔피언 분석</a></li>
        <li className="nerfgg-menu-item"><a href="/statistics">통계</a></li>
      </ul>
    </div>
  )
}

export default Menu;