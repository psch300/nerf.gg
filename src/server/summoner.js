import axios from 'axios';

export function getSummonerSummary(summonerName) {
  return axios.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`);
}

export function getLeagueInformation(summonerId) {
  return axios.get(`/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.REACT_APP_API_KEY}`);
}

export function getMatchLists(summonerId) {
  return axios.get(`/lol/match/v4/matchlists/by-account/${summonerId}?endIndex=3&api_key=${process.env.REACT_APP_API_KEY}`);
}

export function getMatchDetailInformation(matchId) {
  return axios.get(`/lol/match/v4/matches/${matchId}?api_key=${process.env.REACT_APP_API_KEY}`);
}