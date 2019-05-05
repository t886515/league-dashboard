// const request = require('request');
const fs = require('fs');

// request.get(
//   'https://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_GB/championFull.json',
//   function(err, res, body) {
//     const responseBodyObject = JSON.parse(body);
//     const kvp = responseBodyObject.keys;
//     const data = responseBodyObject.data;
//     fs.writeFile(
//       'static-data/champion-key-value-pair.json',
//       JSON.stringify(kvp),
//       'utf-8',
//       function() {
//         console.log('Finished creating champion kvp');
//       }
//     );
//     fs.writeFile(
//       'static-data/champion-data.json',
//       JSON.stringify(data),
//       'utf-8',
//       function() {
//         console.log('Finished creating champion data');
//       }
//     );
//   }
// );

// request.get(
//   'https://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_GB/summoner.json',
//   function(err, res, body) {
//     const responseBodyObject = JSON.parse(body);
//     const { data } = responseBodyObject;

//     const summonerSpellKvp = Object.keys(data).reduce((acc, summonerSpell) => {
//       const { key, id, name, description } = data[summonerSpell];
//       acc[key] = {
//         key,
//         description,
//         name,
//         imageName: id
//       };
//       return acc;
//     }, {});
//     fs.writeFile(
//       'static-data/summoner-spell-kvp.json',
//       JSON.stringify(summonerSpellKvp),
//       'utf-8',
//       function() {
//         console.log('Finished creating summoner spell KVP');
//       }
//     );
//   }
// );

try {
  const rawQueueData = fs.readFileSync(
    'static-data/raw-queue-id-data',
    'utf-8'
  );
  const arrayOfQueueData = rawQueueData.split('*');
  const finalQueueIdKvp = {};
  for (let i = 0; i < arrayOfQueueData.length; i += 3) {
    const queueId = arrayOfQueueData[i].trim();
    const gameMap = arrayOfQueueData[i + 1].trim();
    const gameDescription = arrayOfQueueData[i + 2].trim();
    finalQueueIdKvp[queueId] = {
      queueId,
      gameMap,
      gameDescription
    };
  }
  fs.writeFileSync(
    'static-data/queue-id-kvp.json',
    JSON.stringify(finalQueueIdKvp),
    'utf-8'
  );
} catch (e) {
  console.error(e);
}
