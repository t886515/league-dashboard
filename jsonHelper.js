// "https://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_GB/championFull.json"

const request = require('request');
const fs = require('fs');

request.get(
  'https://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_GB/championFull.json',
  function(err, res, body) {
    // console.log(res.statusCode);
    // console.log(JSON.parse(body).keys);
    // // console.log(body.keys);
    const responseBodyObject = JSON.parse(body);
    const kvp = responseBodyObject.keys;
    const data = responseBodyObject.data;
    fs.writeFile(
      'static-data/champion-key-value-pair.json',
      JSON.stringify(kvp),
      'utf-8',
      function() {
        console.log('Finished creating champion kvp');
      }
    );
    fs.writeFile(
      'static-data/champion-data.json',
      JSON.stringify(data),
      'utf-8',
      function() {
        console.log('Finished creating champion data');
      }
    );
  }
);
