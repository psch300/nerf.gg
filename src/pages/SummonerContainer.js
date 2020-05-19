import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Wrapper, Summary } from 'components';
import * as server from '../server/summoner';
import { Content } from '../components';

const SummonerContainer = ({location}) => {

  const [ summoner, setSummoner ] = useState({});
  const [ soloLeague, setSoloLeague ] = useState({ queueType: "RANKED_SOLO_5x5 "});
  const [ teamLeague, setTeamLeague ] = useState({ queueType: "RANKED_FLEX_SR "});
  const [ matchLists, setMatchLists ] = useState([]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    fetchSummonerSummary(query.userName);
  }, [location]);

  useEffect(() => {
    fetchSummonerMatchLists(summoner.accountId);
  }, [summoner]);

  const fetchSummonerSummary = async (userName) => {
    const summonerSummary = await server.getSummonerSummary(userName);
    const leagueInformation = await server.getLeagueInformation(summonerSummary.data.id);
    
    setSummoner(summonerSummary.data);
    leagueInformation.data.forEach(leagueData => {
      if (leagueData.queueType === "RANKED_SOLO_5x5") {
        setSoloLeague(leagueData);
      } else if (leagueData.queueType === "RANKED_FLEX_SR") {
        setTeamLeague(leagueData);
      }
    });
  }

  const fetchSummonerMatchLists = async (userId) => {
    const matchLists = await server.getMatchListsInformation(userId);
    setMatchLists(matchLists.data.matches);
  }

  return (
    <Wrapper>
      <Summary
        name={summoner.name}
        profileIconId={summoner.profileIconId}
        summonerLevel={summoner.summonerLevel}
      />
      <Content
        soloLeague={soloLeague}
        teamLeague={teamLeague}
        matchLists={matchLists}
      />
    </Wrapper>
  )
}

export default SummonerContainer;