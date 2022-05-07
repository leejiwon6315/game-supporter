import 'styled-components';
import Theme from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof Theme.font;
    fontSize: typeof Theme.fontSize;
    spacing: typeof Theme.spacing;
    color: typeof Theme.color;
    device: typeof Theme.device;
  }
}
