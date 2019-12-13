const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');
const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
  filename: 'carousel-bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        loader : 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
if (process.env.NODE_ENV === 'production'){
  config['mode'] = 'production';
}
module.exports = config;
