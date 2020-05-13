import React from 'react';
import './SideContent.css';

const SideContent = ({soloLeague}) => {
  const { tier, rank, leaguePoints, wins, losses } = soloLeague;
  const getRankNumber = (rank) => {
    if (rank === "I") {
      return 1;
    } else if (rank === "II") {
      return 2;
    } else if (rank === "III") {
      return 3;
    } else if (rank === "IV") {
      return 4;
    } else if (rank === "V") {
      return 5;
    }
  }

  const tierImageUrl = `//opgg-static.akamaized.net/images/medals/${tier}_${getRankNumber(rank)}.png?image=q_auto&v=1`;

  return (
    <div className="SideContent">
      <div className="tierBox">
        <img className="tierImage" src={tierImageUrl} alt="tier"/>
        <div className="tierInformation">
          <b>{tier} {rank}</b><br />
          <b>{leaguePoints}LP</b> / {wins}승 {losses}패
        </div>
      </div>
      <div className="tierBox">
        <img className="tierImage" src={tierImageUrl} alt="tier"/>
        <div className="tierInformation">
          <b>{tier} {rank}</b><br />
          <b>{leaguePoints}LP</b> / {wins}승 {losses}패
        </div>
      </div>
    </div>
  )
}

export default SideContent;