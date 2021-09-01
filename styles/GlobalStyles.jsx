import { createGlobalStyle } from 'styled-components';
import { getColor, getMedias } from './utils';

const GlobalStyles = createGlobalStyle`


:root {
  font-size: 62.5%;
}

body {
  background: linear-gradient(180deg,${getColor(
    'clr-dark-400'
  )} 75%, ${getColor('clr-additional-300')} 100%);
}

html {
  scroll-behavior: smooth;
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

// FORM ELEMENTS

button {
  background: none;
  border: none;
}

// TYPOGRAPHY

p,a {
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-size: 10rem;
}

h2 {
  font-size: 6rem;
}

h3 {
  font-size: 4.5rem;
}

h4 {
  font-size: 3rem;
}

h5 {
  font-size: 2.3rem;
}

// LISTS
ul,
ol {
  list-style: none;
}

@media(max-width: ${getMedias('laptop')}) {
  p {
  font-size: 1rem;
}

h1 {
  font-size: 8rem;
}

h2 {
  font-size: 5rem;
}

h3 {
  font-size: 4rem;
}

h4 {
  font-size: 2.5rem;
}

h5 {
  font-size: 2rem;
}
}

`;

export default GlobalStyles;
