import React from 'react';
import Match from './Match';

const MatchLists = props => {
  return (
    <div className="MatchLists">
      {props.matchLists.length !== 0 &&
        props.matchLists.map(matchDetail => {
          return (
            <Match
              key={matchDetail.selectedSummonerMatchInfo.gameId}
              matchDetail={matchDetail}
            />
          );
        })}
    </div>
  );
};

export default MatchLists;
