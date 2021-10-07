import _ from 'lodash';
import ageRatings from './ageRatingHelpers';

const DATE_OPTIONS = {
  day: 'numeric',
  year: 'numeric',
  month: 'numeric',
};

// HELPER FUNCTIONS

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

const fixURL = (URL, isFormatReplaced = false, size = null) => {
  let fixedURL = `https:${URL}`;

  if (isFormatReplaced) fixedURL = fixedURL.replace('jpg', 'png');
  if (size) fixedURL = fixedURL.replace('t_thumb', `${size}`);

  return fixedURL;
};

const fixDateFormat = (date) =>
  new Date(date * 1000).toLocaleString('en-US', DATE_OPTIONS);

const filterWebsites = (websites) =>
  websites.filter(
    (website) =>
      (website.category === 1 ||
        website.category === 13 ||
        website.category === 16 ||
        website.category === 17) &&
      website.trusted
  );

const filterCompanies = (companies) => {
  return companies.map((company) => ({
    name: company.company.name,
    id: company.company.id,
    url: company.company.url,
    developer: company.developer,
    publisher: company.publisher,
  }));
};

const flattenRules = (item) => {
  return {
    ...item,
    mainImage: {
      title: item.mainImage.fields.title,
      url: fixURL(item.mainImage.fields.file.url),
    },
    galleryImages: item.galleryImages.map((item) => {
      return {
        title: item.fields.title,
        url: fixURL(item.fields.file.url),
      };
    }),
  };
};

const flattenPlatforms = (platforms) =>
  platforms
    .filter((platform) => platform.abbreviation)
    .map((platform) => ({
      ...platform,
      name: platform.abbreviation,
    }));

const filterAgeRating = (ageRating) =>
  ageRating
    .filter((rating) => rating.category === 2)
    .map((rating) => ({
      ...rating,
      name: ageRatings.find(
        (ageRating) => ageRating.value === rating.rating
      ).name,
    }));

// FILTERING

export const flattenGamesData = (data) => {
  return data.map((game) => ({
    ...game,
    cover: {
      id: game.cover.id,
      width: game.cover.width,
      height: game.cover.height,
      url: fixURL(game.cover.url, true, 't_720p'),
      alt: game.name,
    },
    first_release_date: fixDateFormat(game.first_release_date),
  }));
};

export const flattenGameData = (data) => {
  const game = data[0];
  const { age_ratings } = game;
  delete game.age_ratings;

  const filteredCompanies = filterCompanies(game.involved_companies);

  return {
    ...game,
    cover: {
      id: game.cover.id,
      width: game.cover.width,
      height: game.cover.height,
      url: fixURL(game.cover.url, true, 't_720p'),
      alt: game.name,
    },
    first_release_date: fixDateFormat(game.first_release_date),
    background: fixURL(
      game.screenshots[0].url,
      false,
      't_screenshot_huge'
    ),
    screenshots: game.screenshots.map((screenshot) => ({
      ...screenshot,
      url: fixURL(screenshot.url, false, 't_screenshot_big'),
      alt: game.name,
    })),
    rating: Math.floor(game.rating),
    age_rating: filterAgeRating(age_ratings),
    platforms: flattenPlatforms(game.platforms),
    involved_companies: filteredCompanies,
    developer: filteredCompanies.find((company) => company.developer),
    publisher: filteredCompanies.find((company) => company.publisher),
    videos: game.videos[0],
    websites: filterWebsites(game.websites),
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

export const arrayToString = (arr, separator) =>
  arr.map((ob) => ob.name).join(`${separator} `);
