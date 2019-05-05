import React from 'react';
import { FlexWrapper } from '../shared-style/sharedStyle';
import {
  getChampionIconURLById,
  getChampionNameById,
  getSummonerSpellURLById
} from '../../static-data/static-data';
import style from 'styled-components';

// styling component
const ChampionIconImage = style.img`
  max-width: 80px;
  max-height: 80px;
`;
const ItemImage = style.img`
  max-width: 30px;
  max-height: 30px;
`;

const SelectedPlayerStatWrapper = style(FlexWrapper)`
  margin: 10px;
`;
// actual component

const SelectedPlayerStat = props => {
  const { selectedSummonerMatchInfo } = props;
  const { stats, champion, spell1Id, spell2Id } = selectedSummonerMatchInfo;
  const { kills, deaths, assists, champLevel, totalMinionsKilled } = stats;

  return (
    <SelectedPlayerStatWrapper direction="column">
      <span>{getChampionNameById(champion)}</span>
      <ChampionIconImage src={getChampionIconURLById(champion)} />

      <span>
        {kills}/{deaths}/{assists}
      </span>
      <span>LV {champLevel}</span>
      <span>CS {totalMinionsKilled}</span>
      <FlexWrapper>
        <ItemImage src={getSummonerSpellURLById(spell1Id)} />
        <ItemImage src={getSummonerSpellURLById(spell2Id)} />
      </FlexWrapper>
    </SelectedPlayerStatWrapper>
  );
};

export default SelectedPlayerStat;
