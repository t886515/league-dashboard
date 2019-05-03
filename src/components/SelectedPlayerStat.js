import React from 'react';
import { getItemIconURLById } from '../../static-data/static-data';
import style from 'styled-components';

// styling component
const SelectedPlayerStatWrapper = style.div`
  display: flex;
  flex-direction: column;
  
`;
const ItemsImageWrapper = style.div`
  max-width: 100px;
  display: flex;
  flex-direction: row;
`;
// actual component
const getItemLists = stats => {
  const itemLists = [];
  for (let i = 0; i < 6; i++) {
    itemLists.push(stats[`item${i + 1}`]);
  }
  return itemLists;
};
const SelectedPlayerStat = props => {
  const { selectedSummonerMatchInfo } = props;
  const { stats, summonerName, champion } = selectedSummonerMatchInfo;
  const { kills, deaths, assists } = stats;
  const itemLists = getItemLists(stats);

  return (
    <SelectedPlayerStatWrapper>
      <span>{summonerName}</span>
      <span>{champion}</span>
      <ItemsImageWrapper>
        {itemLists &&
          itemLists.map(itemId => {
            if (itemId === 0) {
              itemId = 3637;
            }
            return <img src={getItemIconURLById(itemId)} />;
          })}
      </ItemsImageWrapper>

      <span>
        {kills}/{deaths}/{assists}
      </span>
    </SelectedPlayerStatWrapper>
  );
};

export default SelectedPlayerStat;
