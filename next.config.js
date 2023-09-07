const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/media/', // Ruta de salida para los archivos de video
            publicPath: '_next/static/media/', // Ruta pública para los archivos de video
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};


