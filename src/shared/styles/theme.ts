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

const spacing = (value: number) => {
  return `${value * 2}px`;
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

export const theme = {
  font,
  fontSize,
  spacing,
  color,
  device,
};

export type ThemeColorType = keyof typeof color;
export type ThemeFontType = keyof typeof font;
export type ThemeFontSizeType = keyof typeof fontSize;
export type ThemeSpaceType = keyof typeof spacing;
export type ThemeDeviceType = keyof typeof device;

declare module '@emotion/react' {
  export interface Theme {
    font: typeof font;
    fontSize: typeof fontSize;
    space: typeof spacing;
    color: typeof color;
    device: typeof device;
  }
}
