import { DefaultTheme } from 'styled-components';
import { DEVICES } from './devices';

const color = {
  black: '#333333',
};

const font = {
  bold: 'NotoSansCJKkr-Bold',
  regular: 'NotoSansCJKkr-Regular',
  medium: 'NotoSansCJKkr-Medium',
  light: 'NotoSansCJKkr',
};

const fontSize = {
  title: '2.5rem',
  default: '1rem',
};

const spacing = (value: number | string) => {
  return `${Number(value) * 2}px`;
};

const device = {
  pc: {
    maxWidth: DEVICES.PC_MAX_WIDTH,
    minWidth: DEVICES.MOBILE_MAX_WIDTH,
  },
  mobile: {
    maxWidth: DEVICES.MOBILE_MAX_WIDTH,
    minWidth: DEVICES.MOBILE_MIN_WIDTH,
  },
};

const Theme: DefaultTheme = {
  // theme 추가시 types/styled.d.ts 에 타입 추가
  font,
  fontSize,
  spacing,
  color,
  device,
};

export default Theme;
