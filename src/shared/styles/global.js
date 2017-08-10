import { injectGlobal } from "styled-components";

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    font-family: 'Roboto', sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  html { 
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: #566b78;
    margin: 0 auto;
    max-width: 50em;
    line-height: 1.5;
    padding: 4em 1em;
  }

  h1, h2, h3, strong {
    color: #333;
  }

  h1, h2, h3 {
    font-weight: 300;
    margin-top: 1em;
    padding-top: 1em;
  }

  h1 {
    font-size: 2.2em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.4em;
  }

  code, pre {
    background: #f5f7f9;
    border-bottom: 1px solid #d8dee9;
    color: #a7adba;
  }

  code {
    padding: 2px 4px;
    vertical-align: text-bottom;
  }

  pre {
    padding: 1em;
    border-left: 2px solid #69c;
  }

  a {
    color: #e81c4f;
  }
`;
/* eslint-enable no-unused-expressions */
