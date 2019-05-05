import React, { Component } from 'react';
import style from 'styled-components';
import { colors, FlexWrapper } from '../shared-style/sharedStyle';

const InputFormWrapper = style(FlexWrapper)`
  background-color: ${colors.grey4};
  width: 100%;
  padding: 30px 10px;
  margin-bottom: 20px;
  justify-content: center;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const SummonerInputForm = style.form`
  display: flex;
`;

const InputStyle = style.input`
  border: 3px solid ${colors.grey8};;
  background: transparent;
  border-radius: 2px;
  box-sizing: border-box;
  height: 40px;
  font-family: 'Quicksand', sans-serif;
`;

const SummonerNameInputBox = style(InputStyle)`
  width: 400px;
  margin: 0 10px;
  padding: 0 5px;
  font-size: 18px;
`;

const SummonerNameSubmitButton = style(InputStyle)`
  width: 70px;
  font-size: 14px;
`;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSummonerName: null
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    // if (this.state.selectedSummonerName.value) {
    // need to clean the input!
    const summonerName = this.state.selectedSummonerName.value;
    this.props.onSubmitSummonerName(summonerName);
    // } else {
    // alert: please enter a summoner name!
    // }
  };

  render() {
    return (
      <InputFormWrapper>
        <SummonerInputForm onSubmit={this.handleOnSubmit}>
          <SummonerNameInputBox
            type="text"
            name="summonername"
            ref={input => (this.state.selectedSummonerName = input)}
            placeholder="Please Enter A Summoner's Name..."
            autoFocus
            required
          />
          <SummonerNameSubmitButton type="submit" value="Find!" />
        </SummonerInputForm>
      </InputFormWrapper>
    );
  }
}

export default InputForm;
