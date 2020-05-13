import React from 'react';
import './SideContent.css';

const SideContent = ({leagueData}) => {

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

  const tierImageUrl = `//opgg-static.akamaized.net/images/medals/${leagueData[0].tier}_${getRankNumber(leagueData[0].rank)}.png?image=q_auto&v=1`;

  return (
    <div className="SideContent">
      <div className="soloTierBox">
        <img className="tierImage" src={tierImageUrl} alt="tier"/>
        <div className="tierInformation">
          <b>{leagueData[0].tier} {leagueData[0].rank}</b><br />
          <b>{leagueData[0].leaguePoints}LP</b> / {leagueData[0].wins}승 {leagueData[0].losses}패
        </div>
      </div>
      <div className="flexTierBox">
        <img className="tierImage" src={tierImageUrl} alt="tier"/>
        <div className="tierInformation">
          <b>{leagueData[0].tier} {leagueData[0].rank}</b><br />
          <b>{leagueData[0].leaguePoints}LP</b> / {leagueData[0].wins}승 {leagueData[0].losses}패
        </div>
      </div>
    </div>
  )
}

export default SideContent;