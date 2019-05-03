import React from 'react';
import SelectedPlayerStat from './SelectedPlayerStat';
import TeamPlayerStats from './TeamPlayerStats';
import GameMode from './GameMode';

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
    gameMode
  } = matchDetail;
  return (
    <div className="Match">
      <SelectedPlayerStat
        selectedSummonerMatchInfo={selectedSummonerMatchInfo}
      />
      {filterTeam(participantsDetails, 100).map(participant => {
        return (
          <TeamPlayerStats
            key={participant.participantId}
            participant={participant}
          />
        );
      })}

      {/* gameMode */}
      <GameMode gameMode={gameMode} />

      {filterTeam(participantsDetails, 200).map(participant => {
        return (
          <TeamPlayerStats
            key={participant.participantId}
            participant={participant}
          />
        );
      })}
    </div>
  );
};
export default Match;
