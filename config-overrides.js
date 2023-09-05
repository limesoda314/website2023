const path = require('path');
const webpack = require('webpack');


module.exports = function override(config, env) {
   // Add a Webpack alias for 'fs' to a mock implementation
   config.resolve.alias = {
    ...config.resolve.alias,
    fs: path.resolve(__dirname, 'mocks/mock-fs.js'),
  };
  // Add a Webpack alias for the images directory
  config.resolve.alias = {
    ...config.resolve.alias,
    '@postImages': path.resolve(__dirname, 'src/Components/posts/images'),
  };

  // Add an alias for importing modules
  config.resolve.alias = {
    ...config.resolve.alias,
    '@myalias': path.resolve(__dirname, 'src/myaliasfolder'),
  };

  // Add a custom rule to handle SVG files
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  // Customize the output directory for the build
  config.output.path = path.join(__dirname, 'build');

  // Add environment variables
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.REACT_APP_MY_API_KEY': JSON.stringify('your-api-key'),
    })
  );

  return config;
};
