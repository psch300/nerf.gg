import React from 'react';
import './GameItemList.css';
import { GameItem } from '..';

const GameItemList = ({matchDetailList}) => {

  const gameList = matchDetailList.map((matchDetail, index) => (
    <GameItem key={index} />
  ));

  return (
    <div className="GameItemList">
      {gameList}
    </div>
  )
}

export default GameItemList;