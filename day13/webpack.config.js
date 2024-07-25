// webpack.config.js
const path = require('path');

module.exports = {
    entry: './day13.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
