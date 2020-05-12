import axios from 'axios';

export function getSummonerSummary(summonerName) {
  return axios.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`);
}

export function getLeagueInformation(summonerId) {
  return axios.get(`/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.REACT_APP_API_KEY}`);
}