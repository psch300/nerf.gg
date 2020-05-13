import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Wrapper, Summary } from 'components';
import * as server from '../server/summoner';
import { Content } from '../components';

const SummonerContainer = ({location}) => {

  const [ summoner, setSummoner ] = useState({});
  const [ leagueData, setLeagueData ] = useState([]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    fetchSummonerSummary(query.userName);
  }, [location]);

  const fetchSummonerSummary = async (userName) => {
    const summonerSummary = await server.getSummonerSummary(userName);
    const leagueInformation = await server.getLeagueInformation(summonerSummary.data.id);
    setSummoner(summonerSummary.data);
    setLeagueData(leagueInformation.data);
  }

  return (
    <Wrapper>
      <Summary
        name={summoner.name}
        profileIconId={summoner.profileIconId}
        summonerLevel={summoner.summonerLevel}
      />
      <Content
        leagueData={leagueData}
      />
    </Wrapper>
  )
}

export default SummonerContainer;