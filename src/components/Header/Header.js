import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="Header">
      <div className="nerfgg-header-logo">
        <Link to="/">NERG.GG</Link>
      </div>
      <div className="nerfgg-nav">League of Legends</div>
    </div>
  )
}

export default Header;