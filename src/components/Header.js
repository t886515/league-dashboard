import React, { Component } from 'react';
import { colors, FlexWrapper } from '../shared-style/sharedStyle';
import style from 'styled-components';

const HeaderWrapper = style.header`
  grid-area: header;
  background: ${colors.grey8};
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${colors.grey1}
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <HeaderWrapper> League of Legends Summoner Lookup </HeaderWrapper>;
  }
}

export default Header;
