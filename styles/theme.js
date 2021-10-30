import { keyframes, css } from 'styled-components';

export const fontFamily = {
  primary: 'Chakra Petch',
  secondary: 'roboto',
};

export const fontWeight = {};

export const color = {
  ['clr-light-100']: 'rgb(255, 255, 255)',
  ['clr-light-200']: '#e5e5e5',
  ['clr-light-300']: 'rgba(255, 255, 255,0.5)',

  ['clr-dark-100']: 'rgb(0, 0, 0)',
  ['clr-dark-200']: 'rgba(0, 0, 0, 0.6)',
  ['clr-dark-300']: 'rgb(38, 38, 38)',
  ['clr-dark-400']: '#262626',
  ['clr-dark-500']: '#6c757d',

  ['clr-purple-100']: 'rgb(199, 60, 221)',
  ['clr-purple-200']: 'rgba(199, 60, 221, 0.62)',

  ['clr-additional-100']: '#faaeae',
  ['clr-additional-200']: '#db4343',
  ['clr-additional-300']: '#753e3e',

  ['clr-glitch-100']: '#0ff',
  ['clr-glitch-200']: '#f0f',

  ['clr-error-100']: '#f25c54',

  ['clr-skeleton-100']: '#2A2D43',
  ['clr-skeleton-200']: '#414361',
  ['clr-skeleton-300']: '#8e9aaf',
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
  skeletonEffect: keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.7;
  }
  `,
  rotateSpinner: keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
};

export const mixins = {
  absolute: css`
    position: absolute;
    left: 0;
    top: 0;
  `,
  absoluteCenter: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  flexbox: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const theme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  animations,
  mixins,
};

export default theme;
