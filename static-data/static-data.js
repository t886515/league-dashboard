// dealing with all data and APIs

const championKvp = require('./champion-key-value-pair.json');
const summonerSpellKvp = require('./summoner-spell-kvp.json');
const queueIdKvp = require('./queue-id-kvp.json');

const getChampionIconURLByName = name => {
  return `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${name}.png`;
};

const getItemIconURLById = id => {
  return `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/${id}.png`;
};

const getSummonerSpellURLById = id => {
  const { imageName } = summonerSpellKvp[id];
  return `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/${imageName}.png`;
};

const getChampionNameById = id => {
  return championKvp[id];
};

const getChampionIconURLById = id => {
  return getChampionIconURLByName(getChampionNameById(id));
};

const getGameModeBackgroundByMode = mode => {
  const modeKvp = {
    CLASSIC:
      'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Summoners_rift_platform.png/revision/latest?cb=20160216121609',
    ARAM:
      'http://www.lol-wallpapers.com/wp-content/uploads/2017/06/Howling-Abyss-HD-Wallpaper-Background-Official-Art-Artwork-League-of-Legends-lol-1024x426.jpg'
  };
  return modeKvp[mode];
};

const getExactGameModeByQueueId = queueId => {
  return queueIdKvp[queueId];
};

module.exports = {
  getChampionIconURLByName,
  getChampionIconURLById,
  getChampionNameById,
  getItemIconURLById,
  getSummonerSpellURLById,
  getGameModeBackgroundByMode,
  getExactGameModeByQueueId
};
