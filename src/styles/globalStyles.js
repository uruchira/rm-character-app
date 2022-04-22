import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(36, 40, 47);
    color: #fff;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 14px;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export default globalStyles;
