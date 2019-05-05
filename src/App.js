import React, { Component } from 'react';
import style, { createGlobalStyle } from 'styled-components';
import { getSummonerInfoBySummonerName } from './api/REST-requests';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MatchLists from './components/MatchLists';
import { FlexWrapper, colors } from './shared-style/sharedStyle';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.grey5};
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }
`;

const CSSGridLayout = style.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: auto;
  grid-template-areas: "header" "content";
`;

const ContentWrapper = style.div`
  grid-area: content;
  overflow: auto;
`;
const AppWrapper = style(FlexWrapper)`
  align-items: center;
  height: 100%;
`;
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
    // getSummonerInfoBySummonerName('nanananaa', this.matchListsCallback);
    getSummonerInfoBySummonerName(summonerName, this.matchListsCallback);
  };

  matchListsCallback = (err, res, body) => {
    this.setState(prevState => ({ matchLists: JSON.parse(body) }));
    console.log(this.state.matchLists);
  };

  summonerDetailsCallback = (err, res, body) => {};

  render() {
    return (
      <CSSGridLayout>
        <GlobalStyle />
        <Header />
        <ContentWrapper>
          <AppWrapper direction="column">
            <InputForm onSubmitSummonerName={this.onSubmitSummonerName} />
            {this.state.matchLists.length !== 0 && (
              <MatchLists matchLists={this.state.matchLists} />
            )}
          </AppWrapper>
        </ContentWrapper>
      </CSSGridLayout>
    );
  }
}

export default App;
