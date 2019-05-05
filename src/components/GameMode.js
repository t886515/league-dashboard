import React from 'react';
import { FlexWrapper } from '../shared-style/sharedStyle';
import style from 'styled-components';
import { getExactGameModeByQueueId } from '../../static-data/static-data';

const GameModeWrapper = style(FlexWrapper)`
  max-width: 100px;
  margin: 5px;
  text-align: center;
`;
const GameMode = props => {
  const { gameMode, selectedSummonerMatchInfo } = props;
  const { timestamp, queue } = selectedSummonerMatchInfo;
  const formattedDate = new Date(timestamp).toDateString();
  const { gameMap, gameDescription } = getExactGameModeByQueueId(queue);
  return (
    <GameModeWrapper direction="column">
      <span>{gameMode}</span>
      <span>{gameMap}</span>
      <span>{gameDescription}</span>
      <span>{formattedDate}</span>
    </GameModeWrapper>
  );
};

export default GameMode;
