// https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/nanananaa?api_key=RGAPI-33be3ce3-7673-4af9-8f75-6c3225a6a6e2

const request = require('request');
// const basedUrl = 'https://na1.api.riotgames.com/';
const basedUrl = 'http://localhost:8080/api/';
const API_KEY = require('../../API_SECRETS');
const basicHeader = {
  Origin: 'https://developer.riotgames.com',
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Riot-Token': API_KEY,
  'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
};

const getSummonerInfoBySummonerName = (summonerName, callback) => {
  // const getSummonerInfoBySummonerNameUrl = 'lol/summoner/v4/summoners/by-name/';
  // const finalUrl = `${basedUrl}${getSummonerInfoBySummonerNameUrl}${summonerName}`;
  // const requestObject = {
  //   ...basicHeader,
  //   url: finalUrl
  // };
  const requestObject = {
    url: basedUrl + summonerName
  };
  request.get(requestObject, callback);
  // request.get(requestObject, function(err, res, other) {
  //   console.log(err, res, other);
  // });
};

module.exports = {
  getSummonerInfoBySummonerName
};
