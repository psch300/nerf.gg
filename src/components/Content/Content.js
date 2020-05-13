import React from 'react';
import SideContent from '../SideContent/SideContent';
import RealContent from '../RealContent/RealContent';
import './Content.css';

const Content = ({leagueData}) => {

  return (
    <div className="Content">
      <SideContent className="SideContent" leagueData={leagueData} />
      <RealContent className="RealContent" />
    </div>
  )
}

export default Content;