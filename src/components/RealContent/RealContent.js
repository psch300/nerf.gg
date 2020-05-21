import React from 'react';
import './RealContent.css';
import { GameSummary } from '..';
import GameItemList from '../GameItemList/GameItemList';

const RealContent = ({summonerAccountId, matchDetailList}) => {

  return (
    <div className="RealContent">
      <GameSummary />
      <GameItemList summonerAccountId={summonerAccountId} matchDetailList={matchDetailList} />
    </div>
  )
}

export default RealContent;