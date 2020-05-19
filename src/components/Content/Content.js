import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({soloLeague, teamLeague, matchLists}) => {
  return (
    <div className="Content">
      <SideContent soloLeague={soloLeague} teamLeague={teamLeague} />
      <RealContent matchLists={matchLists} />
    </div>
  )
}

export default Content;