import React from 'react';
import { FlexWrapper, colors } from '../shared-style/sharedStyle';
import { getGameModeBackgroundByMode } from '../../static-data/static-data';
import SelectedPlayerStat from './SelectedPlayerStat';
import TeamPlayerStats from './TeamPlayerStats';
import GameMode from './GameMode';
import style from 'styled-components';

const MatchWrapper = style(FlexWrapper)`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(${props => (props.win ? '0, 255, 0, 0.05' : '255, 0, 0, 0.05')}), 
      rgba(${props => (props.win ? '0, 255, 0, 0.30' : '255, 0, 0, 0.30')})
    ), url(${props =>
      getGameModeBackgroundByMode(props.gameMode)}) no-repeat center;
 
    opacity: 0.8;
    z-index: -1;
  }
`;

const filterTeam = (participants, teamId) => {
  return participants.filter(participant => {
    return participant.teamId === teamId;
  });
};

const Match = props => {
  const { matchDetail } = props;
  const {
    selectedSummonerMatchInfo,
    participantsDetails,
    gameMode,
    win
  } = matchDetail;
  return (
    <MatchWrapper gameMode={gameMode} win={win}>
      <SelectedPlayerStat
        selectedSummonerMatchInfo={selectedSummonerMatchInfo}
      />
      <TeamPlayerStats participants={filterTeam(participantsDetails, 100)} />
      {/* gameMode */}
      <GameMode
        gameMode={gameMode}
        selectedSummonerMatchInfo={selectedSummonerMatchInfo}
      />
      <TeamPlayerStats participants={filterTeam(participantsDetails, 200)} />
    </MatchWrapper>
  );
};
export default Match;
