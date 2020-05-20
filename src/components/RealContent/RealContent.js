import React from 'react';
import './RealContent.css';
import { GameSummary } from '..';
import GameItemList from '../GameItemList/GameItemList';

const RealContent = ({matchDetailList}) => {

  return (
    <div className="RealContent">
      <GameSummary />
      <GameItemList matchDetailList={matchDetailList} />
    </div>
  )
}

export default RealContent;