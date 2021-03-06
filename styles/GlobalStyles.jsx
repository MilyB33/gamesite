import { createGlobalStyle } from 'styled-components';
import { getColor, getMedias, getFontFamily } from './utils';

const GlobalStyles = createGlobalStyle`


:root {
  font-size: 62.5%;
}

body {
  background: linear-gradient(180deg,${getColor(
    'clr-dark-400'
  )} 75%, ${getColor('clr-dark-300')} 100%);
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  font-family: ${getFontFamily('primary')}, sans-serif, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto;
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

input,
select,
textarea {
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  padding: 0;
  margin: 0;
  resize: none;
}

select
 {
  appearance: none;
  background-color: transparent;
  width: 100%;
}

select::-ms-expand {
  display: none;
}

// TYPOGRAPHY

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

p,a {
  font-size: clamp(1rem,3vw + 1rem, 2rem);
  line-height: 35px;
}

h1 {
  font-size: 10rem;
  @media(max-width: ${getMedias('tablet')}) {font-size: 9rem;}  
  @media(max-width: ${getMedias('mobile')}) {font-size: 6rem;}  
}

h2 {
  font-size: 6rem;
  @media(max-width: ${getMedias('tablet')}) {font-size: 5rem;}  
  @media(max-width: ${getMedias('mobile')}) {font-size: 4.5rem;}  

}

h3 {
  font-size: 4.5rem;
  @media(max-width: ${getMedias('tablet')}) {font-size: 3rem;} 
  @media(max-width: ${getMedias('mobile')}) {font-size: 2rem;}  
}

h4 {
  font-size: 3rem;
  @media(max-width: ${getMedias('tablet')}) {font-size: 2rem;}  
  @media(max-width: ${getMedias('mobile')}) {font-size: 1.5rem;}  

}

h5 {
  font-size: 2.3rem;
  @media(max-width: ${getMedias('tablet')}) {font-size: 1.5rem;}  
  @media(max-width: ${getMedias('mobile')}) {font-size: 1.3rem;}  

}

// LISTS
ul,
ol {
  list-style: none;
}





`;

export default GlobalStyles;
