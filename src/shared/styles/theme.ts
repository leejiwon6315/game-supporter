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

const Theme = {
  color,
  font,
  device: {
    pc: {
      maxWidth: DEVICES.PC_MAX_WIDTH,
      minWidth: DEVICES.MOBILE_MAX_WIDTH,
    },
    mobile: {
      maxWidth: DEVICES.MOBILE_MAX_WIDTH,
      minWidth: DEVICES.MOBILE_MIN_WIDTH,
    },
  },
};

export default Theme;
