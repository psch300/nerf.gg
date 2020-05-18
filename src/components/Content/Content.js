import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({soloLeague, teamLeague}) => {
  return (
    <div className="Content">
      <SideContent soloLeague={soloLeague} teamLeague={teamLeague} />
      <RealContent />
    </div>
  )
}

export default Content;