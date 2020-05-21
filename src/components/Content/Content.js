import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({summonerAccountId, soloLeague, teamLeague, matchDetailList}) => {
  return (
    <div className="Content">
      <SideContent soloLeague={soloLeague} teamLeague={teamLeague} />
      <RealContent summonerAccountId={summonerAccountId} matchDetailList={matchDetailList} />
    </div>
  )
}

export default Content;