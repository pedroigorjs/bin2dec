import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #273377;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body,
  button,
  input {
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
  }
`;
