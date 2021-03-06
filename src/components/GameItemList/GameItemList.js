import React from 'react';
import moment from 'moment';
import localization from 'moment/locale/ko'
import './GameItemList.css';
import { GameItem } from '..';

const GameItemList = ({summonerAccountId, matchDetailList}) => {

  const getChampionName = (championId) => {
    switch (championId) {
      case 266: return "Aatrox"; 
      case 412: return "Thresh"; 
      case 23: return "Tryndamere"; 
      case 79: return "Gragas"; 
      case 69: return "Cassiopeia"; 
      case 136: return "AurelionSol"; 
      case 13: return "Ryze"; 
      case 78: return "Poppy"; 
      case 14: return "Sion"; 
      case 1: return "Annie"; 
      case 202: return "Jhin"; 
      case 43: return "Karma"; 
      case 111: return "Nautilus"; 
      case 240: return "Kled"; 
      case 99: return "Lux"; 
      case 103: return "Ahri"; 
      case 2: return "Olaf"; 
      case 112: return "Viktor"; 
      case 34: return "Anivia"; 
      case 27: return "Singed"; 
      case 86: return "Garen"; 
      case 127: return "Lissandra"; 
      case 57: return "Maokai"; 
      case 25: return "Morgana"; 
      case 28: return "Evelynn"; 
      case 105: return "Fizz"; 
      case 74: return "Heimerdinger"; 
      case 238: return "Zed"; 
      case 68: return "Rumble"; 
      case 82: return "Mordekaiser"; 
      case 37: return "Sona"; 
      case 96: return "KogMaw"; 
      case 55: return "Katarina"; 
      case 117: return "Lulu"; 
      case 22: return "Ashe"; 
      case 30: return "Karthus"; 
      case 12: return "Alistar"; 
      case 122: return "Darius"; 
      case 67: return "Vayne"; 
      case 110: return "Varus"; 
      case 77: return "Udyr"; 
      case 89: return "Leona"; 
      case 126: return "Jayce"; 
      case 134: return "Syndra"; 
      case 80: return "Pantheon"; 
      case 92: return "Riven"; 
      case 121: return "Khazix"; 
      case 42: return "Corki"; 
      case 268: return "Azir"; 
      case 51: return "Caitlyn"; 
      case 76: return "Nidalee"; 
      case 85: return "Kennen"; 
      case 3: return "Galio"; 
      case 45: return "Veigar"; 
      case 432: return "Bard"; 
      case 150: return "Gnar"; 
      case 90: return "Malzahar"; 
      case 104: return "Graves"; 
      case 254: return "Vi"; 
      case 10: return "Kayle"; 
      case 39: return "Irelia"; 
      case 64: return "LeeSin"; 
      case 420: return "Illaoi"; 
      case 60: return "Elise"; 
      case 106: return "Volibear"; 
      case 20: return "Nunu"; 
      case 4: return "TwistedFate"; 
      case 24: return "Jax"; 
      case 102: return "Shyvana"; 
      case 429: return "Kalista"; 
      case 36: return "DrMundo"; 
      case 427: return "Ivern"; 
      case 131: return "Diana"; 
      case 223: return "TahmKench"; 
      case 63: return "Brand"; 
      case 113: return "Sejuani"; 
      case 8: return "Vladimir"; 
      case 154: return "Zac"; 
      case 421: return "RekSai"; 
      case 133: return "Quinn"; 
      case 84: return "Akali"; 
      case 163: return "Taliyah"; 
      case 18: return "Tristana"; 
      case 120: return "Hecarim"; 
      case 15: return "Sivir"; 
      case 236: return "Lucian"; 
      case 107: return "Rengar"; 
      case 19: return "Warwick"; 
      case 72: return "Skarner"; 
      case 54: return "Malphite"; 
      case 157: return "Yasuo"; 
      case 101: return "Xerath"; 
      case 17: return "Teemo"; 
      case 75: return "Nasus"; 
      case 58: return "Renekton"; 
      case 119: return "Draven"; 
      case 35: return "Shaco"; 
      case 50: return "Swain"; 
      case 91: return "Talon"; 
      case 40: return "Janna"; 
      case 115: return "Ziggs"; 
      case 245: return "Ekko"; 
      case 61: return "Orianna"; 
      case 114: return "Fiora"; 
      case 9: return "Fiddlesticks"; 
      case 31: return "Chogath"; 
      case 33: return "Rammus"; 
      case 7: return "Leblanc"; 
      case 16: return "Soraka"; 
      case 26: return "Zilean"; 
      case 56: return "Nocturne"; 
      case 222: return "Jinx"; 
      case 83: return "Yorick"; 
      case 6: return "Urgot"; 
      case 203: return "Kindred"; 
      case 21: return "MissFortune"; 
      case 62: return "MonkeyKing"; 
      case 53: return "Blitzcrank"; 
      case 98: return "Shen"; 
      case 201: return "Braum"; 
      case 5: return "XinZhao"; 
      case 29: return "Twitch"; 
      case 11: return "MasterYi"; 
      case 44: return "Taric"; 
      case 32: return "Amumu"; 
      case 41: return "Gangplank"; 
      case 48: return "Trundle"; 
      case 38: return "Kassadin"; 
      case 161: return "Velkoz"; 
      case 143: return "Zyra"; 
      case 267: return "Nami"; 
      case 59: return "JarvanIV"; 
      case 81: return "Ezreal";
      case 164: return "Camille";
      case 498: return "Xayah";
      case 497: return "Racan";
      case 141: return "Kayn";
      case 516: return "Ornn";
      case 142: return "Zoe";
      case 145: return "Kaisa";
      case 555: return "Pyke";
      case 518: return "Neeko";
      case 517: return "Sylas";
      case 350: return "Yuumi";
      case 246: return "Qiyana";
      case 235: return "Senna";
      case 523: return "Aphelios";
      case 875: return "Sett";
      default: return "";
    }
  }

  const getItemIds = (stats) => {
    let result = [];
    for (let i=0; i<7; i++) {
      let key = "item";
      result.push(stats[key+i.toString()]);
    }

    return result;
  }

  const gameList = matchDetailList.map((matchDetail, index) => {

    const participantId = matchDetail.participantIdentities.find(participantIdentity => participantIdentity.player.accountId === summonerAccountId).participantId;
    const targetSummoner = matchDetail.participants.find(participant => participant.participantId === participantId);
    const summonerTeamId = targetSummoner.teamId;

    const gameType = matchDetail.queueId === 400 ? '자유 5:5 랭크' : matchDetail.queueId === 420 ? '솔랭' : '일반';
    const timeStamp = moment(matchDetail.gameCreation + matchDetail.gameDuration*1000).locale('ko', localization).fromNow();
    const gameResult = matchDetail.teams.find(team => team.teamId === summonerTeamId).win === 'Win' ? '승리' : '패배';
    const gameLength = Math.floor(matchDetail.gameDuration/60).toString() + '분 ' + Math.floor(matchDetail.gameDuration%60).toString() + '초';
    const championName = getChampionName(targetSummoner.championId);
    const kda = targetSummoner.stats.kills.toString() + ' / ' + targetSummoner.stats.deaths.toString() + ' / ' + targetSummoner.stats.assists.toString();
    const kdaRatio = targetSummoner.stats.deaths === 0 && (targetSummoner.stats.kills + targetSummoner.stats.assists) !== 0 ? "Perfect 평점" : ((targetSummoner.stats.kills + targetSummoner.stats.assists) / targetSummoner.stats.deaths).toFixed(2) + ':1 평점';
    const level = '레벨 ' + targetSummoner.stats.champLevel.toString();
    const creepScore = (targetSummoner.stats.neutralMinionsKilled + targetSummoner.stats.totalMinionsKilled).toString() + ' (' + ((targetSummoner.stats.neutralMinionsKilled + targetSummoner.stats.totalMinionsKilled)/(matchDetail.gameDuration/60)).toFixed(1) + ') CS';
    const pkRate = '킬관여 ' + ((targetSummoner.stats.kills + targetSummoner.stats.assists) / (matchDetail.participants.filter(participant => participant.teamId === summonerTeamId).reduce((acc, cur) => acc + cur.stats.kills, 0)) * 100).toFixed(0) + '%';
    const itemIds = getItemIds(targetSummoner.stats);
    const participantsList = matchDetail.participantIdentities.map(participantIdentity => ({
      participantId: participantIdentity.participantId,
      summonerName: participantIdentity.player.summonerName,
      championName: getChampionName(matchDetail.participants.find(participant => participant.participantId === participantIdentity.participantId).championId)
    }));

    return (
      <GameItem
        key={index}
        timeStamp={timeStamp}
        gameType={gameType}
        gameResult={gameResult}
        gameLength={gameLength}
        championName={championName}
        kda={kda}
        kdaRatio={kdaRatio}
        level={level}
        creepScore={creepScore}
        pkRate={pkRate}
        itemIds={itemIds}
        participantsList={participantsList}
      />
    );
  });

  return (
    <div className="GameItemList">
      {gameList}
    </div>
  )
}

export default GameItemList;