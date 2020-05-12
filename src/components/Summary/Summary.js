import React from 'react';
import './Summary.css';

const Summary = ({name, profileIconId, summonerLevel}) => {
  const profileIconIdUrl = `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${profileIconId}.png`

  return (
    <div className="Summary">
      <img src={profileIconIdUrl} alt="icon"/>
      <div className="profile">
        {name}<br />
        {summonerLevel}<br />
      </div>
    </div>
  )
}

export default Summary;