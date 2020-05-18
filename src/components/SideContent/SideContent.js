import React from 'react';
import './SideContent.css';
import { TierBox } from '..';

const SideContent = ({soloLeague, teamLeague}) => {
  return (
    <div className="SideContent">
      <TierBox league={soloLeague} />
      <TierBox league={teamLeague} />
    </div>
  )
}

export default SideContent;