import React from 'react';
import './TierBox.css';

const TierBox = ({league}) => {
  const { tier, rank, leaguePoints, wins, losses, queueType } = league;

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

  const tierImageUrl = tier !== undefined ?
    `https://opgg-static.akamaized.net/images/medals/${tier}_${getRankNumber(rank)}.png?image=q_auto&v=1` :
    'https://opgg-static.akamaized.net/images/medals/default.png';

  return (
    <div className="TierBox">
      <img className="tierImage" src={tierImageUrl} alt="tier"/>
      <div className="tierInformation">
        { queueType === "RANKED_SOLO_5x5" ? (<span className="queueType">솔로랭크</span>) : (<span className="queueType">자유 5:5 랭크</span>)}
        { tier !== undefined ? (
          <div>
            <b>{tier} {rank}</b><br />
            <b>{leaguePoints}LP</b> / {wins}승 {losses}패<br />
            <span>승률 {(wins/(wins + losses)*100).toFixed(0)}%</span>
          </div>
        ) : (
          <div>
            <b>Unranked</b>
          </div>
        )}
      </div>
    </div>
  )
}

export default TierBox;