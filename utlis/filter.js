import _ from 'lodash';

const DATE_OPTIONS = {
  day: 'numeric',
  year: 'numeric',
  month: 'numeric',
};

const getConnectedData = (res) => {
  return res.items.map((item) =>
    item.fields.image1
      ? {
          ...item,
          image1: res.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.image1.sys.id
          ),
        }
      : item
  );
};

const connectAssets = (data) => {
  const { Asset: assets } = data.includes;
  const { items } = data;

  return items.map((item) => {
    return {
      ...item.fields,
      mainImage: assets.find(
        (asset) => asset.sys.id === item.fields.mainImage.sys.id
      ),
      galleryImages: item.fields.galleryImages.map((item) =>
        assets.find((asset) => asset.sys.id === item.sys.id)
      ),
    };
  });
};

const flattenRules = (item) => {
  return {
    ...item,
    mainImage: {
      title: item.mainImage.fields.title,
      url: `https:${item.mainImage.fields.file.url}`,
    },
    galleryImages: item.galleryImages.map((item) => {
      return {
        title: item.fields.title,
        url: `https:${item.fields.file.url}`,
      };
    }),
  };
};

const flattenPlatforms = (platforms) => {
  return platforms
    .filter((platform) => platform.abbreviation)
    .map((platform) => ({
      name: platform.abbreviation,
      id: platform.platform_logo.id,
      width: platform.platform_logo.width,
      height: platform.platform_logo.height,
    }));
};

export const flattenGamesData = (data) => {
  return data.map((game) => ({
    ...game,
    cover: {
      id: game.cover.id,
      width: game.cover.width,
      height: game.cover.height,
      url: `https:${game.cover.url
        .replace('jpg', 'png')
        .replace('t_thumb', 't_720p')}`,
      alt: game.name,
    },
    first_release_date: new Date(
      game.first_release_date * 1000
    ).toLocaleString('en-US', DATE_OPTIONS),
  }));
};

export const flattenGameData = (data) => {
  const game = data[0];

  return {
    ...game,
    cover: {
      id: game.cover.id,
      width: game.cover.width,
      height: game.cover.height,
      url: `https:${game.cover.url
        .replace('jpg', 'png')
        .replace('t_thumb', 't_720p')}`,
      alt: game.name,
    },
    first_release_date: new Date(
      game.first_release_date * 1000
    ).toLocaleString('en-US', DATE_OPTIONS),
    background: `https:${game.screenshots[0].url.replace(
      't_thumb',
      't_screenshot_huge'
    )}`,
    screenshots: game.screenshots.map((screenshot) => ({
      ...screenshot,
      url: `https:${screenshot.url.replace(
        't_thumb',
        't_screenshot_medium'
      )}`,
    })),
  };
};

export const flattenArticlesData = (res) => {
  const connected = connectAssets(res);

  return connected.map(flattenRules);
};

export const homeArticles = (res) => {
  return flattenArticlesData(res).filter(
    (item) => item.isDisplayedOnHomePage
  );
};

export const getExactPost = (res, slug) => {
  const flattened = flattenArticlesData(res);

  return flattened.find((post) => post.slug === slug);
};
