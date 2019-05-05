import style from 'styled-components';

export const FlexWrapper = style.div`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
`;

export const colors = {
  primary: '',
  secondary: '#93948c',
  tertiary: '',
  pass: '#b4ed7b',
  lightPass: '#dbffb7',
  erorr: '#ff3a47',
  lightError: '#e8b6ad',
  warning: '',
  lightWarning: '',
  gray: '#edebe9',
  darkGray: '#545251',
  grey1: '#fafafa',
  grey2: '#f5f5f5',
  grey3: '#eee',
  grey4: '#e0e0e0 !important',
  grey5: '#bdbdbd!important',
  grey6: '#9e9e9e!important',
  grey7: '#757575!important',
  grey8: '#616161!important',
  grey9: '#424242!important',
  grey10: '#212121!important'
};

const sharedStyle = {
  FlexWrapper,
  colors
};
export default sharedStyle;
