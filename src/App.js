import React, { Component } from 'react';
import { getSummonerInfoBySummonerName } from './api/REST-requests';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MatchLists from './components/MatchLists';
import {
  getChampionIconURLById,
  getChampionNameById
} from '../static-data/static-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchLists: [],
      selectedSummonerName: null
    };
  }

  componentDidMount() {
    // getSummonerInfoBySummonerName('nanananaa', this.initiateData);
    // Don't really do anything....
  }

  onSubmitSummonerName = summonerName => {
    this.selectedSummonerName = summonerName;
    console.log(summonerName, 'here');

    // updateMatchLists

    this.retrieveMatchListsOfASummoner(summonerName);

    // updateHeader
    // phase 2
  };

  retrieveMatchListsOfASummoner = summonerName => {
    getSummonerInfoBySummonerName('nanananaa', this.matchListsCallback);
    // getSummonerInfoBySummonerName(summonerName, this.matchListsCallback);
  };

  matchListsCallback = (err, res, body) => {
    this.setState(prevState => ({ matchLists: JSON.parse(body) }));
    console.log(this.state.matchLists);
  };

  summonerDetailsCallback = (err, res, body) => {};

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm onSubmitSummonerName={this.onSubmitSummonerName} />
        {this.state.matchLists.length !== 0 && (
          <MatchLists matchLists={this.state.matchLists} />
        )}
      </div>
    );
  }
}

export default App;
