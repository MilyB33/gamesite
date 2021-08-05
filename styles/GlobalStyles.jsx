import { createGlobalStyle } from 'styled-components';
import { getColor } from './utils';

const GlobalStyles = createGlobalStyle`


:root {
  font-size: 62.5%;
}

body {
  background: linear-gradient(${getColor('clr-dark-300')}, ${getColor(
  'clr-additional-300'
)});
}

*,
*::after,
*::before {
  font-family: 'Chakra Petch', sans-serif, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
}

// TYPOGRAPHY

p {
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2.2rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1rem;
}

// LISTS
ul,
ol {
  list-style: none;
}

`;

export default GlobalStyles;