const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const IfPlugin = require('if-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const importIfExist = require('stylus-import-if-exist');
const SpritesmithPlugin = require('webpack-spritesmith');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const getData = require('jade-get-data');

const srcPath = path.resolve(__dirname, 'app');
const distPath = path.resolve(__dirname, 'dist');

const iconsPath = path.resolve(srcPath, 'icons');
const spritesPath = path.resolve(srcPath, 'sprites');
const staticPath = path.resolve(srcPath, 'resources');
const fontsPath = path.resolve(srcPath, 'resources/assets/fonts');

const pugPath = path.resolve(srcPath, 'pages');

const data = {
  getData: getData('app/data'),
  jv0: 'javascript:void(0);'
};

const tmplName = 'stylus_retina.template.handlebars';
const tmplPath = '../node_modules/spritesmith-stylus-retina-template';
const cssTemplate = path.join(__dirname, tmplPath, tmplName);

function generateSpritePlugins() {
  const templateFiles = fs.readdirSync(spritesPath);

  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];

    return new SpritesmithPlugin({
      src: {
        cwd: path.resolve(spritesPath, `${name}`),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, `dist/assets/images/sprites/${name}.png`),
        css: path.resolve(__dirname, `app/styles/sprites/${name}.styl`)
      },
      apiOptions: {
        cssImageRef: `../images/sprites/${name}.png`
      },
      spritesmithOptions: {
        cssTemplate,
        imgPath: `../images/sprites/${name}.png`,
        cssName: `${name}.styl`,
        algorithm: 'binary-tree',
        padding: 8,
        cssFormat: 'stylus'
      }
    });
  });
}

const spritePlugins = generateSpritePlugins();

module.exports = env => ({
  context: srcPath,
  // devtool: 'inline-source-map',
  resolve: {
    modules: ['node_modules', path.resolve(distPath, 'assets/images/sprites')],
    alias: {
      '@': srcPath
    }
  },
  entry: {
    assets: './assets.js',
    app: './scripts/app.js',
    'app.min': './styles/app.styl'
    // 'brands.min': './styles/brands.styl'
  },
  output: {
    filename: './assets/scripts/[name].min.js',
    path: distPath
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name]-[hash].[ext]',
      //       outputPath: '../',
      //       publicPath: '/dist'
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              stylusOptions: {
                resolveURL: false,
                use: [importIfExist]
              },
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        include: fontsPath,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        exclude: iconsPath,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
            // name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        include: iconsPath,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              symbolId: filePath => 'icon_' + path.basename(filePath).slice(0, -4),
              spriteFilename: 'assets/images/icon.svg'
            }
          },
          {
            loader: 'svg-transform-loader'
          },
          {
            loader: 'svgo-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        include: pugPath,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].html',
              context: pugPath
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false,
              doctype: 'html',
              basedir: pugPath,
              data,
              filters: {
                // filter for include json data as empty string
                'json-watch': () => ''
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssnanoPlugin({
        test: /\.css$/i,
        sourceMap: false,
        cssnanoOptions: {
          preset: ['default', {
            zindex: false
          }]
        }
      }),
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(distPath),
    new CopyWebpackPlugin([{
      from: staticPath,
      to: distPath
    }]),
    ...spritePlugins,
    new FixStyleOnlyEntriesPlugin({
      extensions: ['styl', 'css']
    }),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        style: 'width:0; height:0; visibility:hidden;'
      }
    }),
    new IfPlugin(
      env === 'server',
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3005,
        ghostMode: false,
        server: {
          baseDir: distPath
        }
      }, {
        injectCss: true
      })
    )
  ]
});
