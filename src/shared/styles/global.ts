import { css } from '@emotion/react';
import { DEVICES } from './devices';

export const globalStyle = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  html,
  body {
    width: 100%;
    font-family: 'Spoqa Han Sans Neo', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  b,
  u,
  i,
  ol,
  ul,
  li,
  form,
  label,
  table,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  footer,
  header,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
  }
  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
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
    line-height: 1;
  }
  table,
  thead,
  tbody,
  tr,
  td,
  th {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    width: fit-content;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  button {
    border: none;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
`;
