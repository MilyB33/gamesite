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
    .filter((platform) => platform.platform_logo)
    .map((platform) => ({
      alt: platform.name,
      url: platform.platform_logo.url,
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
      url: `https:${game.cover.url}`,
      alt: game.name,
    },
    first_release_date: new Date(
      game.first_release_date * 1000
    ).toLocaleString('en-US', DATE_OPTIONS),
    platforms: flattenPlatforms(game.platforms),
  }));
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
