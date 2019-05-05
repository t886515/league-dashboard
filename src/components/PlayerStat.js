import React from 'react';
import { FlexWrapper } from '../shared-style/sharedStyle';
import {
  getItemIconURLById,
  getChampionIconURLById
} from '../../static-data/static-data';
import style from 'styled-components';

const ItemImage = style.img`
  max-width: 30px;
  max-height: 30px;
`;
const PlayerStatWrapper = style(FlexWrapper)`
  &:not(:first-child) {
    margin-top: 10px;
  }
  justify-content: space-between;
`;

const PlayerStatDetailWrapper = style(FlexWrapper)`
  width: 100px;
  margin: 0px 5px;
`;
const PlayerSummonerName = style.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChampionIcon = style.img`
  max-width: 40px;
  max-height: 40px;
  border-radius: 20px;
  overflow: auto;
`;

const getItemLists = stats => {
  const itemLists = [];
  for (let i = 0; i < 7; i++) {
    itemLists.push(stats[`item${i}`]);
  }
  return itemLists;
};
const PlayerStat = props => {
  const { participant } = props;
  const { summonerName, stats, championId } = participant;
  const { kills, deaths, assists } = stats;
  const itemLists = getItemLists(stats);

  return (
    <PlayerStatWrapper>
      <FlexWrapper>
        <ChampionIcon src={getChampionIconURLById(championId)} />
        <PlayerStatDetailWrapper direction="column">
          <PlayerSummonerName>{summonerName}</PlayerSummonerName>
          <div>{`${kills}/${deaths}/${assists}`}</div>
        </PlayerStatDetailWrapper>
      </FlexWrapper>
      <FlexWrapper>
        {itemLists &&
          itemLists.map((itemId, i) => {
            if (itemId === 0) {
              itemId = 3637;
            }
            return (
              <ItemImage
                key={summonerName + i}
                src={getItemIconURLById(itemId)}
              />
            );
          })}
      </FlexWrapper>
    </PlayerStatWrapper>
  );
};

export default PlayerStat;
