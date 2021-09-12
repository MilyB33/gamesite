import { keyframes } from 'styled-components';

export const fontFamily = {
  primary: 'Chakra Petch',
  secondary: 'roboto',
};

export const fontWeight = {};

export const color = {
  ['clr-light-100']: 'rgb(255, 255, 255)',
  ['clr-light-200']: '#e5e5e5',

  ['clr-dark-100']: 'rgb(0, 0, 0)',
  ['clr-dark-200']: 'rgba(0, 0, 0, 0.6)',
  ['clr-dark-300']: 'rgb(38, 38, 38)',
  ['clr-dark-400']: '#262626',

  ['clr-purple-100']: 'rgb(199, 60, 221)',
  ['clr-purple-200']: 'rgba(199, 60, 221, 0.62)',

  ['clr-additional-100']: '#faaeae',
  ['clr-additional-200']: '#db4343',
  ['clr-additional-300']: '#753e3e',

  ['clr-glitch-100']: '#0ff',
  ['clr-glitch-200']: '#f0f',
};

export const medias = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const animations = {
  openMobileMenu: keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
  `,
  fadeIn: keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  `,

  glitch: keyframes`
	0% {
		transform: translate(0)
	}
	20% {
		transform: translate(-5px, 5px)
	}
	40% {
		transform: translate(-5px, -5px)
	}
	60% {
		transform: translate(5px, 5px)
	}
	80% {
		transform: translate(5px, -5px)
	}
	to {
		transform: translate(0)
	}
`,
};

const theme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  animations,
};

export default theme;
