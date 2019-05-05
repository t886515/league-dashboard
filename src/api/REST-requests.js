const request = require('request');
const basedUrl = 'http://localhost:8080/api/';

const getSummonerInfoBySummonerName = (summonerName, callback) => {
  const requestObject = {
    url: basedUrl + summonerName
  };
  request.get(requestObject, callback);
};

module.exports = {
  getSummonerInfoBySummonerName
};
