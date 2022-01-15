import { createGlobalStyle } from 'styled-components';
import { DEVICES } from './devices';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    box-sizing: border-box;
  }

  html {
      @media (max-width: ${DEVICES.PC_MAX_WIDTH}px) and (min-width: ${DEVICES.MOBILE_MAX_WIDTH + 1}px) {
          width: 1240px;
      }
      
      @media (max-width: ${DEVICES.MOBILE_MAX_WIDTH}px) {
          min-width: 375px;
      }
  }

  body {
    width: 100%;
    min-width: ${DEVICES.MOBILE_MIN_WIDTH}
  }

`;

export default GlobalStyles;
