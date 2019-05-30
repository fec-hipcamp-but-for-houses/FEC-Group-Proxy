const path = require('path')
module.exports = {
  entry: __dirname + '/client/app.jsx',
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env',{
              'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
      },
      {
        test: [/\.css$/],
        include: path.join(__dirname, './client/Modules/FEC-Airbnb-Reviews/client/src/components/styleSheet.css'),
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]___[hash:base64:5]' } }],
      },
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
    }
  },
};