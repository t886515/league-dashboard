import React from 'react';
import style from 'styled-components';
import PlayerState from './PlayerStat';

const TeamPlayerStatsWrapper = style.div`
  display: flex;
  flex-direction: column;
`;
const TeamPlayerStats = props => {
  return (
    <TeamPlayerStatsWrapper>
      {props.participants.map(participant => (
        <PlayerState
          key={participant.participantId}
          participant={participant}
        />
      ))}
    </TeamPlayerStatsWrapper>
  );
};

export default TeamPlayerStats;
