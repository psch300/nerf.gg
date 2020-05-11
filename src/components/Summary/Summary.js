import React from 'react';
import './Summary.css';

const Summary = ({summoner}) => {

  const { name, profileIconId } = summoner;
  const profileIconIdUrl = `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profileIconId}.png`

  return (
    <div className="Summary">
      <img src={profileIconIdUrl} alt="icon"/>
      <div className="profile">{name}</div>
    </div>
  )
}

export default Summary;