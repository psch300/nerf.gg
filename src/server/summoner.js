import axios from 'axios';

export function getSummonerSummary(summonerName) {
  return axios.get(`/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`);
}