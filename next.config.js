const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  env: {
    CLIENT_SECRET: '3cdb1jotd4zw1evfiawk5xklp6rqkg',
    CLIENT_ID: '27t6azcjdfmwzhzxufi5b8i9nf96v7',
    API_TOKEN: 'x6c83905gzoe964vn9q69p9rjlgif0',
  },
  images: {
    domains: ['images.igdb.com', 'images.ctfassets.net'],
  },
});
