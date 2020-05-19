import React from 'react';
import './GameItemList.css';
import { GameItem } from '..';

const GameItemList = ({matchLists}) => {

  const gameList = matchLists.map((match, index) => (
    <GameItem key={index} />
  ));

  return (
    <div className="GameItemList">
      {gameList}
    </div>
  )
}

export default GameItemList;