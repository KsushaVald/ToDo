const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require ('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientComplier = webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleware(clientComplier, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',

}));

hmrServer.use(webpackHotMiddleware(clientComplier, {
  path: '/static/__webpack_hmr',
}))


hmrServer.listen(3001, () => {
  console.log('HMR server succsessfuly started');
})

const complier = webpack(webpackServerConfig);


complier.watch({}, (err) => {
  if(err) {
    console.log('Compilation faild: ', err);
  }
  console.log('Compilatuion was successfully');
});

nodemon({
  script: path.resolve(__dirname, '../dist/server/server.js'),
  watch: [
    path.resolve(__dirname, '../dist/server'),
    path.resolve(__dirname, '../dist/client'),
  ],
});

