import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({soloLeague}) => {
  return (
    <div className="Content">
      <SideContent soloLeague={soloLeague} />
      <RealContent />
    </div>
  )
}

export default Content;