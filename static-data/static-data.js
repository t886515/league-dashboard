// dealing with all data and APIs

const championKvp = require('./champion-key-value-pair.json');

const getChampionIconURLByName = name => {
  return `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${name}.png`;
};

const getItemIconURLById = id => {
  return `http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/${id}.png`;
};

const getChampionNameById = id => {
  return championKvp[id];
};

const getChampionIconURLById = id => {
  return getChampionIconURLByName(getChampionNameById(id));
};

module.exports = {
  getChampionIconURLByName,
  getChampionIconURLById,
  getChampionNameById,
  getItemIconURLById
};
