const path = require('path');

module.exports = {
  reactStrictMode: true,
  // This allows to passing theme down in components tree
  resolve: {
    alias: {
      'my-external-components': path.resolve(
        '../path-to-my-external/components/'
      ),
    },
  },
};
