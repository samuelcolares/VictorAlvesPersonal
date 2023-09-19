'use client';
// styled-components
import { css, createGlobalStyle } from 'styled-components';

// normalize


// workaround for formatting of global styles
// https://github.com/prettier/prettier/pull/9025#issuecomment-678655928
const styles = css`
  /* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */
  html{
    font-size: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;