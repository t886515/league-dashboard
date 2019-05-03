import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSummonerName: null
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const summonerName = this.state.selectedSummonerName.value;
    this.props.onSubmitSummonerName(summonerName);
  };

  render() {
    return (
      <div className="InputForm">
        <form>
          <input
            type="text"
            ref={input => (this.state.selectedSummonerName = input)}
          />
          <input type="submit" onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}

export default InputForm;
