import React from 'react';
import Match from './Match';
import style from 'styled-components';
import { FlexWrapper } from '../shared-style/sharedStyle';

const MatchLists = props => {
  return (
    <FlexWrapper direction="column">
      {props.matchLists.length !== 0 &&
        props.matchLists.map(matchDetail => {
          return (
            <Match
              key={matchDetail.selectedSummonerMatchInfo.gameId}
              matchDetail={matchDetail}
            />
          );
        })}
    </FlexWrapper>
  );
};

export default MatchLists;
