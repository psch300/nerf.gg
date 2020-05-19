import React from 'react';
import './RealContent.css';
import { GameSummary } from '..';
import GameItemList from '../GameItemList/GameItemList';

const RealContent = ({matchLists}) => {
  return (
    <div className="RealContent">
      <GameSummary />
      <GameItemList matchLists={matchLists} />
    </div>
  )
}

export default RealContent;