import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Wrapper, Summary } from 'components';
import * as server from '../server/summoner';
import { Content } from '../components';

const SummonerContainer = ({location}) => {

  const [ summoner, setSummoner ] = useState({});
  const [ soloLeague, setSoloLeague ] = useState({ queueType: "RANKED_SOLO_5x5 "});
  const [ teamLeague, setTeamLeague ] = useState({ queueType: "RANKED_FLEX_SR "});
  const [ matchList, setMatchList ] = useState([]);
  const [ matchDetailList, setMatchDetailList ] = useState([]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    fetchSummonerSummary(query.userName);
  }, [location]);

  useEffect(() => {
    fetchMatchList(summoner.accountId);
  }, [summoner]);

  useEffect(() => {
    fetchMatchDetailList(matchList);
  }, [matchList]);

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

  const fetchMatchList = async (userId) => {
    const matchList = await server.getMatchLists(userId);
    setMatchList(matchList.data.matches); 
  }

  const fetchMatchDetailList = async (matchList) => {
    const matchDetailList = await Promise.all(
      matchList.map(match => {
        return server.getMatchDetailInformation(match.gameId);
      })
    );

    setMatchDetailList(matchDetailList.map((matchDetail) => (matchDetail.data)));
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
        matchDetailList={matchDetailList}
      />
    </Wrapper>
  )
}

export default SummonerContainer;