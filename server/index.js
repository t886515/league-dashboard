const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const basedUrl = 'https://na1.api.riotgames.com/';
const API_KEY = require('../API_SECRETS');

const app = express();

const hashFromLastTenMatches = onlyTakeLastTen => {
  console.log(onlyTakeLastTen);
  return onlyTakeLastTen.reduce((acc, match) => {
    acc[match.gameId] = match;
    return acc;
  }, {});
};

const handleTenMatchDetails = (
  results,
  hashLastTenMatch,
  selectedSummonerName
) => {
  return results.map(match => {
    const matchResult = JSON.parse(match);
    const {
      participants,
      participantIdentities,
      gameId,
      gameMode
    } = matchResult;
    const selectedSummonerMatchInfo = hashLastTenMatch[gameId];
    let win;
    // console.log(match);
    // console.log(participants);
    // console.log(gameId);
    const participantsDetails = participants.map((participant, index) => {
      const participantIdentity = participantIdentities[index];
      const { player } = participantIdentity;
      const { summonerName } = player;
      const {
        championId,
        stats,
        teamId,
        highestAchievedSeasonTier
      } = participant;

      // if this player is the selected player
      if (summonerName.toLowerCase() === selectedSummonerName.toLowerCase()) {
        // get win and lose from participants stats
        win = stats.win;
        selectedSummonerMatchInfo.summonerName = summonerName;
        selectedSummonerMatchInfo.stats = stats;
        selectedSummonerMatchInfo.teamId = teamId;
        selectedSummonerMatchInfo.highestAchievedSeasonTier = highestAchievedSeasonTier;
      }

      return {
        participantId: index + 1,
        championId,
        stats,
        summonerName,
        teamId,
        highestAchievedSeasonTier
      };
    });
    return {
      participantsDetails,
      selectedSummonerMatchInfo,
      win,
      gameMode
    };
  });
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/:summonerName', function(req, res) {
  console.log(req.params);
  try {
    const matchResults = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'mock-data/matchDetails.json'))
    );
    const onlyTakeLastTen = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'mock-data/matchLists.json'))
    );
    const { summonerName } = req.params;
    const hashLastTenMatch = hashFromLastTenMatches(onlyTakeLastTen);
    const cleanMatchResults = handleTenMatchDetails(
      matchResults,
      hashLastTenMatch,
      summonerName
    );
    res.send(cleanMatchResults);

    // const { summonerName } = req.params;
    // const getSummonerInfoBySummonerNameUrl =
    //   'lol/summoner/v4/summoners/by-name/';
    // const findSummonerIDByNameUrl = `${basedUrl}${getSummonerInfoBySummonerNameUrl}${summonerName}?api_key=${
    //   API_KEY.API_SECRETS
    // }`;
    // request.get(findSummonerIDByNameUrl, function(error, response, body) {
    //   const { accountId } = JSON.parse(body);
    //   console.log(accountId, body);
    //   console.log(path.resolve(__dirname, 'mock-data/summonerInfo.json'));
    //   const getSummonerMatches = 'lol/match/v4/matchlists/by-account/';
    //   const findMatchesBySummonerHashIDUrl = `${basedUrl}${getSummonerMatches}${accountId}?api_key=${
    //     API_KEY.API_SECRETS
    //   }`;
    //   request.get(findMatchesBySummonerHashIDUrl, function(
    //     error2,
    //     responses2,
    //     body2
    //   ) {
    //     const onlyTakeLastTen = JSON.parse(body2).matches.slice(0, 10);
    //     const getAMatchDetail = '/lol/match/v4/matches/';
    //     const promises = onlyTakeLastTen.map(match => {
    //       const { gameId } = match;
    //       const findMatchDetailUrl = `${basedUrl}${getAMatchDetail}${gameId}?api_key=${
    //         API_KEY.API_SECRETS
    //       }`;
    //       // console.log(findMatchDetailUrl);
    //       return new Promise((resolve, reject) => {
    //         request(findMatchDetailUrl, function(error3, response3, body3) {
    //           resolve(body3);
    //           reject(error3);
    //         });
    //       });
    //     });
    //     Promise.all(promises).then(function(matchResults) {
    //       const hashLastTenMatch = hashFromLastTenMatches(onlyTakeLastTen);
    //       const cleanMatchResults = handleTenMatchDetails(
    //         matchResults,
    //         hashLastTenMatch,
    //         summonerName
    //       );
    //       res.send(cleanMatchResults);
    //     });
    //   });
    // });
  } catch (e) {
    console.log('idk yet', e);
  }
});
app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
