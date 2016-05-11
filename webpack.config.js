/* global require */
const p = require('path');
const getConfig = require('hjs-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meta = require('./package.json');

const ENV = process.env.NODE_ENV || 'development';

const isDev = ENV === 'development';

const PATHS = {
  src: p.join(__dirname, 'src'),
  build: p.join(__dirname, 'build'),
  resources: p.join(__dirname, 'resources'),
  modules: p.join(__dirname, 'src', 'modules'),
  plugins: p.join(__dirname, 'src', 'plugins'),
  core: p.join(__dirname, 'src', 'core'),
  components: p.join(__dirname, 'src', 'components'),
};

const hjsConfig = {
  // Entry point for the app
  in: 'src/app.js',
  // Output directory
  out: 'build',
  // Clear output folder before building
  clearBeforeBuild: true,
  html: false,
  // Dev server settings
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: false,
    inline: true,
    hot: true,
    progress: true,
    proxy: {
      '/api/*': {
        target: 'http://mbensch.vs1.test:9004/',
      },
    },
  },
};

// Enable Sourcemaps
if (isDev) {
  hjsConfig.isDev = true;
}

// Get Base Config
const config = getConfig(hjsConfig);

// Add File loader
config.module.loaders.push({
  test: /\.txt$/,
  loader: 'file',
});

// Add Handlebars loader
config.module.loaders.push({
  test: /\.hbs$/,
  loader: 'handlebars',
});

// Add HTML Plugin
const HtmlOpts = {
  applicationName: 'Vertiscale',
  title: 'Vertiscale',
  version: meta.version,
  template: 'src/index.hbs',
  inject: 'body',
  appMountId: 'root',
};

if (isDev) {
  HtmlOpts.hash = true;
}

config.plugins.push(new HtmlWebpackPlugin(HtmlOpts));

// Add resolve aliases
config.resolve.alias = {
  resources: PATHS.resources,
  'uikit.less': `${PATHS.resources}/ui-kit/index.less`,
  animate: `${PATHS.resources}/ui-kit/animate.min.css`,
  img: `${PATHS.resources}/images`,
  static: `${PATHS.resources}/static`,
  modules: `${PATHS.modules}/index.js`,
  plugins: `${PATHS.plugins}/index.js`,
  components: `${PATHS.components}/`,
  core: `${PATHS.core}`,
  react: p.resolve('./node_modules/react'),
};

module.exports = config;
