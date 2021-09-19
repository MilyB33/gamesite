const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ['images.igdb.com', 'images.ctfassets.net'],
  },
});
