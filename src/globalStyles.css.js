import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(188,187,213);
    background: linear-gradient(180deg, rgba(188,187,213,1) 0%, rgba(208,208,238,1) 35%, rgba(248,251,251,1) 100%);
  }
`;
