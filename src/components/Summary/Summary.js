import React from 'react';
import './Summary.css';

const Summary = ({summonerName, profileIconId, summonerLevel}) => {
  const profileIconIdUrl = `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/profileicon/${profileIconId}.png`

  return (
    <div className="Summary">
      <img src={profileIconIdUrl} alt="icon" />
      <div className="profile">
        {"Lv " + summonerLevel} {summonerName}
      </div>
    </div>
  )
}

export default Summary;