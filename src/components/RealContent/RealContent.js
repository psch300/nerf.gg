import React from 'react';
import './RealContent.css';
import GameItemList from '../GameItemList/GameItemList';

const RealContent = ({summonerAccountId, matchDetailList}) => {

  return (
    <div className="RealContent">
      <GameItemList summonerAccountId={summonerAccountId} matchDetailList={matchDetailList} />
    </div>
  )
}

export default RealContent;