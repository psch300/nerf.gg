import React from 'react';
import './GameItem.css';

const GameItem = ({gameType, gameResult, gameLength, championName, kda, kdaRatio, level, creepScore, pkRate}) => {

  const className = gameResult === "승리" ? "GameItem Win" : "GameItem Fail";
  const gameResultClassName = gameResult === "승리" ? "GameResult Win" : "GameResult Fail";
  const championImgUrl = `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/champion/${championName}.png`;

  return (
    <div className={className}>
      <div className="GameStats">
        <div className="GameType">{gameType}</div>
        <hr className="Bar" />
        <div className={gameResultClassName}>{gameResult}</div>
        <div className="GameLength">{gameLength}</div>
      </div>
      <div className="GameSettingInfo">
        <img className="ChampionImg" src={championImgUrl} alt={championName} />
        <div className="ChampionName">
          {championName}
        </div>
      </div>
      <div className="KDAScore">
        <div className="KDA">{kda}</div>
        <div className="KDARatio">{kdaRatio}</div>
      </div>
      <div className="Stats">
        <div className="Level">{level}</div>
        <div className="CS">{creepScore}</div>
        <div className="PKRate">{pkRate}</div>
      </div>
    </div>
  )
}

export default GameItem;