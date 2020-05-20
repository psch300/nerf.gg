import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({soloLeague, teamLeague, matchDetailList}) => {
  return (
    <div className="Content">
      <SideContent soloLeague={soloLeague} teamLeague={teamLeague} />
      <RealContent matchDetailList={matchDetailList} />
    </div>
  )
}

export default Content;