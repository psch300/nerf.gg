import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Wrapper, Summary } from 'components';
import * as server from '../server/summoner';

const SummonerContainer = ({location}) => {

  const [ summoner, setSummoner ] = useState({});

  useEffect(() => {
    const query = queryString.parse(location.search);
    fetchSummonerSummary(query.userName);
  }, [location]);

  const fetchSummonerSummary = async (userName) => {
    const response = await server.getSummonerSummary(userName);
    setSummoner(response.data);
  }

  return (
    <Wrapper>
      <Summary summoner={summoner} />
    </Wrapper>
  )
}

export default SummonerContainer;