import React from 'react';
import Match from './Match';

const TeamPlaterStats = props => {
  return (
    <div className="TeamPlaterStats">{props.participant.summonerName}</div>
  );
};

export default TeamPlaterStats;
