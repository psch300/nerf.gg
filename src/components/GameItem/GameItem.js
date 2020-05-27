import React from 'react';
import './GameItem.css';

const GameItem = ({gameType, timeStamp, gameResult, gameLength, championName, kda, kdaRatio, level, creepScore, pkRate, itemIds, participantsList}) => {

  const className = gameResult === "승리" ? "GameItem Win" : "GameItem Fail";
  const gameResultClassName = gameResult === "승리" ? "GameResult Win" : "GameResult Fail";
  const championImgUrl = `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/champion/${championName}.png`;
  const items = itemIds.map((item, index) => {
    const itemImgUrl = item === 0 ? '/images/itemblank.png' : `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/item/${item}.png`;
  
    return (
      <td key={index}><img src={itemImgUrl} alt={item}/></td>
    );
  });
  const players = participantsList.map((participant, index) => {
    const playerSearchUrl = `/summoner?userName=${participant.summonerName}`;
    const playerImgUrl = `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/champion/${participant.championName}.png`;

    return (
      <li key={index}>
        <img src={playerImgUrl} alt={participant.championName}/>&nbsp;
        <a href={playerSearchUrl} target="_blank" rel="noopener noreferrer">{participant.summonerName}</a>
      </li>
    );
  });

  return (
    <div className={className}>
      <div className="GameStats">
        <div className="GameType">{gameType}</div>
        <div className="TimeStamp">{timeStamp}</div>
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
      <div className="Items">
        <table>
          <tbody>
            <tr>
              {items.slice(0, 3)}
              {items.slice(6, 7)}
            </tr>
            <tr>
              {items.slice(3, 6)}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Players Blue">
        <ul>
          {players.slice(0, 5)}
        </ul>
      </div>
      <div className="Players Red">
        <ul>
          {players.slice(5, 10)}
        </ul>
      </div>
    </div>
  )
}

export default GameItem;