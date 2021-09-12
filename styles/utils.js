export const getColor =
  (colorName) =>
  ({ theme }) =>
    theme.color[colorName];

export const getFontFamily =
  (fontName) =>
  ({ theme }) =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName) =>
  ({ theme }) =>
    theme.fontWeight[fontWeightName];

export const getMedias =
  (mediaName) =>
  ({ theme }) =>
    theme.medias[mediaName];

export const getAnimation =
  (animationName) =>
  ({ theme }) =>
    theme.animations[animationName];

export const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
