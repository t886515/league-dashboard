'use strict';
//TODO why use strict?

const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageConfig = require('../package.json');

exports.assetsPath = _path => {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  //posix has to do with resolving path on different OS
  //this is used to return an absolute assets sub directory path when build
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options = { sourceMap: false }) => {
  const { sourceMap } = options;
  const loaders = [];
  const generateLoaders = (loader, loaderOptions) => {
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          souceMap: options.sourceMap,
        }),
      });
    }
    return loaders;
  };

  //continue
  //turn on css sourcemap boolean
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap,
    },
  };

  //TODO we are not going to worry about postcssLoader until I need it... Can disable
  // const postcssLoader = {
  //   loader: 'postcss-loader',
  // options: {
  //   sourceMap;
  // }
  // };

  //TODO don't worry about the usePostCSS option. just toggle those on and off here
  return {
    css: generateLoaders('css'),
    // postcss: generateLoaders('postcss'),
    // less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    // stylus: generateLoaders('stylus'),
    // styl: generateLoaders('stylus')
  };
};

exports.styleLoaders = options => {
  const output = [];
  //constructing css loader options using
  const loaders = exports.cssLoaders(options);

  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader,
    });
  }
  return output;
};

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier');

  return (severity, errors) => {
    if (severity !== 'error') return;

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png'),
    });
  };
};
